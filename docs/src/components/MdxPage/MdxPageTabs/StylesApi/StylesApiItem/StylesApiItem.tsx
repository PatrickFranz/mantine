import React from 'react';
import { Table, Title } from '@mantine/core';
import * as STYLES_API from '@mantine/core/src/styles.api';
import CodeHighlight from '../../../../CodeHighlight/CodeHighlight';
import { generateStylesCode, generateClassNamesCode } from '../generate-styles-code';
import useStyles from './StylesApiItem.styles';

interface StylesApiItemProps {
  component: string;
}

export function StylesApiItem({ component }: StylesApiItemProps) {
  const classes = useStyles();
  const COMPONENT_STYLES = STYLES_API[component];

  if (!COMPONENT_STYLES || typeof COMPONENT_STYLES !== 'object') {
    return null;
  }

  const CLASS_NAMES = Object.keys(COMPONENT_STYLES);
  const rows = CLASS_NAMES.map((name) => (
    <tr key={name}>
      <td>{name}</td>
      <td>{COMPONENT_STYLES[name]}</td>
    </tr>
  ));

  return (
    <>
      <Title order={2} className={classes.title}>
        {component} component styles API
      </Title>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>

      <div className={classes.codeSections}>
        <div className={classes.codeSection}>
          <Title order={3} className={classes.title}>
            Inline {component} styles
          </Title>

          <CodeHighlight language="tsx" code={generateStylesCode(CLASS_NAMES, component)} />
        </div>

        <div className={classes.codeSection}>
          <Title order={3} className={classes.title}>
            {component} classNames
          </Title>

          <CodeHighlight language="tsx" code={generateClassNamesCode(CLASS_NAMES, component)} />
        </div>
      </div>
    </>
  );
}
