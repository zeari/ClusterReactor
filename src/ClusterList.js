import React, { Component } from 'react';
import classNames from 'classnames';
import { ListView, Icon, Button, Row, Col } from 'patternfly-react'

export const mockListItems = [
  {
    title: 'Item 1',
    description: 'This is Item 1 description',
    properties: { nodes: 7 },
    expandedContentText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    compoundExpandText: {
      nodes: "Text describing Item 1's nodes",
    }
  },
  {
    title: 'Item 2',
    description: 'This is Item 2 description',
    properties: { nodes: 11 },
    expandedContentText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    compoundExpandText: {
      nodes: "Text describing Item 2's nodes",
    }
  },
  {
    title: 'Item 3',
    description: 'This is Item 3 description',
    properties: { nodes: 2 },
    expandedContentText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    compoundExpandText: {
      nodes: "Text describing Item 3's nodes",
    }
  },
];

export const renderActions = () => (
  <div>
    <Button>Details</Button>
  </div>
);

export const renderAdditionalInfoItems = itemProperties =>
  itemProperties &&
  Object.keys(itemProperties).map(prop => {
    const cssClassNames = classNames('pficon', {
      'pficon-flavor': prop === 'hosts',
      'pficon-cluster': prop === 'clusters',
      'pficon-container-node': prop === 'nodes',
      'pficon-image': prop === 'images'
    });
    return (
      <ListView.InfoItem key={prop}>
        <span className={cssClassNames} />
        <strong>{itemProperties[prop]}</strong> {prop}
      </ListView.InfoItem>
    );
});


class ClusterList extends Component {
  render() {
    return (
      <ListView>
        {mockListItems.map(({ actions, properties, title, description, expandedContentText, hideCloseIcon }, index) => (
          <ListView.Item
            key={index}
            actions={renderActions(actions)}
            checkboxInput={<input type="checkbox" />}
            leftContent={<ListView.Icon name="cluster" type="pf" />}
            additionalInfo={renderAdditionalInfoItems(properties)}
            heading={title}
            description={description}
            stacked={false}
            hideCloseIcon={false}
          >
            <Row>
              <Col sm={11}>{expandedContentText}</Col>
            </Row>
          </ListView.Item>
        ))}
      </ListView>
    );
  }
}

export { ClusterList };