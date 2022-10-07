import classNames from 'classnames'
import List from '../List/List'
import styles from './Item.module.scss'

export default function Item({ item, depth = 0 }) {
    let classes = classNames(styles.item, {
        [styles.itemChecked]: item.checked,
        [styles.itemHasChildren]: item.children && item.children.length > 0,
    })

    return <li className={ classes }>
        <div className={ styles.content }>{ item.content }</div>

        { item.children && item.children.length > 0 && <List items={ item.children } depth={ depth + 1 } /> }
    </li>
}