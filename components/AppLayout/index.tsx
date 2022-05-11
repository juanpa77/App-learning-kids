import { ReactElement } from 'react'

export default function AppLayout ({ children }: { children: ReactElement[] | ReactElement }) {
  return (
    <>
      {children}
      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 10px;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
          
          a {
            color: inherit;
            text-decoration: none;
          }
          
          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </>
  )
}
