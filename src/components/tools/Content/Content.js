import React from "react"
import "./Content.scss"
import Files from "../Files/Files"

const Content = ({
  title,
  genre,
  date,
  content,
  urls,
  files,
  office,
}) => {
  return (
    <article className={"content"}>
      {/* title */}
      <h1 className={"is-2 bold"} dangerouslySetInnerHTML={{ __html: title }} />

      {/* meta */}
      <div className={"meta"}>
        <p className={"is-5 light"}>{genre}</p>
        <p className={"is-5 light"}>{date ? date.slice(0, 10) : null}</p>
        <p className={"is-5 tag"}>{office}</p>
      </div>

      {/* files */}
      <Files files={files} urls={urls}></Files>

      {/* context */}
      <p
        className={"is-4 context"}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}

export default Content
