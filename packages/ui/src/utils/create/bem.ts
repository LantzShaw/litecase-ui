/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */

export type Mod = string | { [key: string]: any };
export type Mods = Mod | Mod[];

function gen(name: string, mods?: Mods): string {
  if (!mods) {
    return '';
  }

  if (typeof mods === 'string') {
    return ` ${name}--${mods}`;
  }

  if (Array.isArray(mods)) {
    return mods.reduce<string>(
      (ret: string, item: string) => ret + gen(name, item),
      '',
    );
  }

  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? gen(name, key) : ''),
    '',
  );
}

export function createBEM(name: string) {
  return (el?: Mods, mods?: Mods): Mods => {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = el ? `${name}__${el as string}` : name;

    // return `${el}${gen(el, mods)}`
    /**
     * FIXME: when createBEM('text'), we can get results like this: lc_button lc-button__text
     */
    // if (name === el) {
    return `${el}${gen(el, mods)}`;
    // } else {
    //   return `${name} ${el}${gen(el, mods)}`
    // }
  };
}

export type BEM = ReturnType<typeof createBEM>;
