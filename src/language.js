const noop = () => undefined;

export const then = (...args) => ({
  then: fn => then(fn(...args))
});

export const _if = (condition, fn = noop) => then(condition ? fn() : null);

export const _else = then;

export const l = {
  if: _if,
  then: then,
  else: _else
};
