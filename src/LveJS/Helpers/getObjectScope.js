export default function getObjectScope(scope, property) {

  let scopes

  scopes = property.split('.')
  property = scopes.pop()

  for (let i = 1, len = scopes.length; i < len; i++) {
    scope = scope[scopes[i]]
  }

  return {
    scope,
    property
  }

}