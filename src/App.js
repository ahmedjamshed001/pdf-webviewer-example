import React from "react"
import WebViewer from "@pdftron/webviewer"
// import WebViewer from "./webviewer/ui/index.html"

function App() {
  const viewer = React.useRef(null)
  console.log(process.env.PUBLIC_URL)

  React.useEffect(() => {
    WebViewer(
      {
        path: "/webviewer/lib",
        initialDoc: "/dummy.pdf",
      },
      viewer.current
    ).then((instance) => {
      const { docViewer } = instance
      console.log(docViewer)
    })
    // you can now call WebViewer APIs here...
  }, [])

  return (
    <div style={styles.container}>
      <div className="webviewer" ref={viewer} style={styles.webViewer} />
    </div>
  )
}

const styles = {
  container: {
    height: "100vh",
  },

  webViewer: {
    height: "100%",
  },
}

export default App
