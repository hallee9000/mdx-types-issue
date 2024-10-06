import Image from 'next/image'
import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => {
      return(
        <Image
          src={props.src as string}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt={props.alt as string}
        />
      )
    },
    ...components,
  }
}
