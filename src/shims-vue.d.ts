declare module '*.vue' {
    import { Component } from 'vue'
    const component: Component
    export default component
  }

declare module '*.md' {
    const str: string
    export default str
}

  