import React from 'react';
import {
  type SectionElement,
  type SectionElementProps,
  useSectionStore,
} from '../store/Section';
import { type TagType } from '../store/Types';
import { useSectionRender } from '../utils/useRender';

export const CountInfoExtra = <K extends TagType>(props: SectionElement<K>) => {
  const { CountInfoExtra: Comp = {} } = useSectionStore();
  useSectionRender(Comp, props, 'CountInfoExtra');
  return null;
};

CountInfoExtra.displayName = 'JVR.CountInfoExtra';

export interface CountInfoExtraCompsProps<T extends object> {
  value?: T;
  keyName: string | number;
}

export const CountInfoExtraComps = <T extends object, K extends TagType>(
  props: SectionElementProps<K> & CountInfoExtraCompsProps<T>,
) => {
  const { value = {}, keyName, ...other } = props;
  const { CountInfoExtra: Comp = {} } = useSectionStore();
  const { as, render, ...reset } = Comp;
  if (!render && !reset.children) return null;
  const Elm = as || 'span';
  const isRender = render && typeof render === 'function';
  const elmProps = { ...reset, ...other };
  const child =
    isRender && render(elmProps as React.HTMLAttributes<K>, { value, keyName });
  if (child) return child;
  return <Elm {...elmProps} />;
};

CountInfoExtraComps.displayName = 'JVR.CountInfoExtraComps';
