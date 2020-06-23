/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, Children} from 'react';
import useUserPreferencesContext from '@theme/hooks/useUserPreferencesContext';

import clsx from 'clsx';

import {
  Avatar,
  Card,
  Row,
  Col
} from 'antd'
const { Meta } = Card

import styles from './styles.module.css';

const keys = {
  left: 37,
  right: 39,
};

const TabCard = ({icon, label, description}) => (
  <Card bordered={true} hoverable={true}>
    <Meta
      avatar={<Avatar src={`/icons/${icon||label}.png`} />}
      title={label}
      description={description}
    />
  </Card>
)

function Tabs(props) {
  const {block, children, defaultValue, values, groupId} = props;
  const {tabGroupChoices, setTabGroupChoices} = useUserPreferencesContext();
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  if (groupId != null) {
    const relevantTabGroupChoice = tabGroupChoices[groupId];
    if (
      relevantTabGroupChoice != null &&
      relevantTabGroupChoice !== selectedValue &&
      values.some((value) => value.value === relevantTabGroupChoice)
    ) {
      setSelectedValue(relevantTabGroupChoice);
    }
  }

  const changeSelectedValue = (newValue) => {
    setSelectedValue(newValue);
    if (groupId != null) {
      setTabGroupChoices(groupId, newValue);
    }
  };

  const tabRefs = [];

  const focusNextTab = (tabs, target) => {
    const next = tabs.indexOf(target) + 1;

    if (!tabs[next]) {
      tabs[0].focus();
    } else {
      tabs[next].focus();
    }
  };

  const focusPreviousTab = (tabs, target) => {
    const prev = tabs.indexOf(target) - 1;

    if (!tabs[prev]) {
      tabs[tabs.length - 1].focus();
    } else {
      tabs[prev].focus();
    }
  };

  const handleKeydown = (tabs, target, event) => {
    switch (event.keyCode) {
      case keys.right:
        focusNextTab(tabs, target);
        break;
      case keys.left:
        focusPreviousTab(tabs, target);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Row
        gutter={[8, 24]}
        role="tablist"
        aria-orientation="horizontal"
        className={clsx('tabs', {
          'px-tabs--block': block,
        })}>
        {values.map(({value, label, icon, description}) => (
          <Col
            span={24/(values.length)}
            role="tab"
            tabIndex="0"
            aria-selected={selectedValue === value}
            className={clsx('px-tabs__item', styles.tabItem, {
              'px-tabs__item--active': selectedValue === value,
            })}
            key={value}
            ref={(tabControl) => tabRefs.push(tabControl)}
            onKeyDown={(event) => handleKeydown(tabRefs, event.target, event)}
            onFocus={() => changeSelectedValue(value)}
            onClick={() => changeSelectedValue(value)}
          >
            <TabCard icon={icon} label={label} description={description}/>
          </Col>
        ))}
      </Row>
      <div role="tabpanel" layout="panel" className="px-margin-vert--md">
        {
          Children.toArray(children).filter(
            (child) => child.props.value === selectedValue,
          )[0]
        }
      </div>
    </div>
  );
}

export default Tabs;
