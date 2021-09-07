import React from 'react'
import {BiDotsHorizontal, BiX} from 'react-icons/bi'

function Accordion(props) {
  const {title, content} = props;

  let [isOpen, setOpen] = React.useState(false);

  const onClick = () => {
    setOpen(!isOpen);
  }
  return (
    <div className="accordion">
      <div className="title">
        <h1>{title}</h1>
        <button onClick={onClick}>{isOpen ? <BiX/> : <BiDotsHorizontal/>}</button>
      </div>
      <div className={"content" + (isOpen ? " open" : "")}>
        <p>
          {content}
        </p>
      </div>
    </div>
  )
}

export default Accordion
