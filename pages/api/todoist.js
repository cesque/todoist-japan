const Todoist = require('todoist').v8
const todoist = Todoist(process.env.TODOIST_API_KEY)

function nest(items, id = null) {
    return items
        .filter(item => item.parent_id === id)
        .map(item => ({ ...item, children: nest(items, item.id) }));
}

export default async function handler(req, res) {
    // READING DATA:
    // sync(): retrieves the latest data, incrementally.
    //         the first call retrieves all data, but you can ask
    //         for the specific data you want by passing
    //         eg ['projects', 'items']
    await todoist.sync()
    
    const projectID = process.env.PROJECT_ID

    let projectItems = todoist.items.get().filter(item => item.project_id == projectID)

    res.status(200).json(nest(projectItems))
}
