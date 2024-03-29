import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import SocialsView from "./socials-view";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/*<Alert custom-camera={custom-camera} />*/}
        <SocialsView />
        <main>{children}</main>
      </div>
      {/*<Footer />*/}
    </>
  )
}

export default Layout
