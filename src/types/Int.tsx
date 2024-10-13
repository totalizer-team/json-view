import { useTypesStore, type TagType, type TypesElement } from '../store/Types';
import { useTypesRender } from '../utils/useRender';

export const Int = <K extends TagType = 'span'>(props: TypesElement<K>) => {
  const { Int: Comp = {} } = useTypesStore();
  useTypesRender(Comp, props, 'Int');

  return null;
};

Int.displayName = 'JVR.Int';
