import React, { Component, PropTypes } from 'react';
import sortDirections from 'Utilities/sortDirections';
import Link from 'Components/Link';
import Icon from 'Components/Icon';
import styles from './TableHeaderCell.css';

class TableHeaderCell extends Component {

  //
  // Listeners

  onPress = () => {
    this.props.onSortPress(this.props.name);
  }

  //
  // Render

  render() {
    const {
      className,
      name,
      label,
      sortable,
      sortKey,
      sortDirection,
      onSortPress,
      ...otherProps
    } = this.props;

    const isSorting = sortable && sortKey === name;
    const sortIcon = sortDirection === sortDirections.ASCENDING ?
                     'icon-sonarr-sort-asc' :
                     'icon-sonarr-sort-desc';

    return (
      sortable ?
        <Link
          component="th"
          className={className}
          onPress={this.onPress}
          {...otherProps}
        >
          {label}

          {
            isSorting &&
              <Icon
                name={sortIcon}
                className={styles.sortIcon}
              />
          }
        </Link> :

        <th className={className}>
          {label}
        </th>
    );
  }
}

TableHeaderCell.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  sortable: PropTypes.bool,
  sortKey: PropTypes.string,
  sortDirection: PropTypes.string,
  onSortPress: PropTypes.func
};

TableHeaderCell.defaultProps = {
  sortable: false
};

export default TableHeaderCell;
