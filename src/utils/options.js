function getOption({ opts }, name, defaultValue = false) {
  return opts[name] === undefined || opts[name] === null ? defaultValue : opts[name]
}

export const styledTemplate = (state) => getOption(state, 'styled', '&& {{{css}}}');
export const cssTemplate = (state) => getOption(state, 'css');
export const injectGlobalTemplate = (state) => getOption(state, 'injectGlobal');