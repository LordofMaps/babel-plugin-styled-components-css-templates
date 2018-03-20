import cssTemplate from './visitors/cssTemplate'

export default function({ types: t }) {
  return {
    visitor: {
      TaggedTemplateExpression(path, state) {
        cssTemplate(path, state)
      },
    }
  }
}
