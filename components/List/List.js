import classNames from 'classnames'
import Item from '../Item/Item'
import styles from './List.module.scss'

export default function List({ items, depth = 0 }) {
    let classes = classNames(styles.list, {
        [styles.listBase]: depth == 0,
        [styles.listNested]: depth > 0,
    });

    return <ul className={ classes }>
        { items.map((item, index) => <Item item={ item } depth={ depth } key={ index} />) }
    </ul>
}