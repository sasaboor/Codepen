import React, {useState, useCallback, useEffect} from 'react'
import Navbar from './components/Navbar'
import Result from './components/Result'
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import CodeMirror from "@uiw/react-codemirror";
import Footer from './components/Footer';

function App() {
  const [html_edit, setHtml_Edit] = useState('');
  const [css_edit, setCss_Edit] = useState('');
  const [js_edit, setJs_Edit] = useState('');
  const [srcCode, setSrcCode]= useState('')

  const onChangeHtml= useCallback((value)=>{
    console.log(value)
    setHtml_Edit(value)
  },[])
  const onChangeCss= useCallback((value)=>{
    console.log(value)
    setCss_Edit(value)

  },[])
  const onChangeJavaScript= useCallback((value)=>{
    console.log(value)
    setJs_Edit(value)
  },[])

  useEffect(()=>{
    const timeout= setTimeout(()=>{
      setSrcCode( `
    <html>
      <body>${html_edit}</body>
      <style>${css_edit}</style>
      <script>${js_edit}</script>
    </html>
`)
    }, 250)
    return ()=> clearTimeout(timeout)
  }, [html_edit, css_edit, js_edit])

  return (
    <div>
     {/* Navbar  */}
      <Navbar />

      {/* main content  */}
      <div className=" p-2">
        {/* Editor  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
         {/* Html Editor */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={html_edit}
              height="342px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>

          {/* Css Editor  */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={css_edit}
              height="342px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>

          {/* JavaScript Editor  */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">JavaScript</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={js_edit}
              height="342px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJavaScript}
            />
          </div>
        </div>
      </div>
      <Result
      srcCode={srcCode}
      />
      <Footer/>
    </div>
  )
}

export default App