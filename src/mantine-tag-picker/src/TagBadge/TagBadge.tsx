import React from 'react';
import cx from 'clsx';
import oc from 'open-color';
import { TagPickerTag } from '../types';
import isBrightColor from './is-bright-color';
import classes from './TagBadge.styles.less';

interface TagBadgeProps {
  className?: string;
  data: TagPickerTag;
}

export default function TagBadge({ className, data }: TagBadgeProps) {
  return (
    <div
      className={cx(classes.tagBadge, className)}
      style={{
        color: isBrightColor(data.color) ? oc.black : oc.white,
        backgroundColor: data.color,
      }}
    >
      {data.name}
    </div>
  );
}

TagBadge.displayName = '@mantine/tag-picker/TagBadge';