import React from 'react'

const Info = (props) => {
    return (
        <div className={props.classchild.join(' ')}>
            <div className="main__title">{props.title}</div>
            <div className="main__info">{props.info.map((info_element, index) => <p className="info__paragraph" key={index}>{info_element}</p>)}</div>
        </div>
    )
}

const MainInfo = (props) => {
    const rows = props.data.map((row, index) => {
        if(index === 0){
            return <Info title={row.title} info={row.info} classchild={props.classchilds.classforfirstchild} key={index}/>
        }else{
            return <Info title={row.title} info={row.info} classchild={props.classchilds.classforsecondchild} key={index}/>
        }
    })

    return rows
}

const GuideText = (props) => {
    const br = <br/>
    const text = props.guidetext
    
    const sections = text.content.map((section, index) => {
        return (
            <div className="guide-text__section" key={index}>
                <div className="guide-text__title">{section.title}</div>
                <div className="guide-text__content">{section.sectioncontent.map((content, index) => <p className="content__paragraph" key={index}>{content}</p>)}</div>
                {section.quote.map((row, index) => <div className="guide-text__quotes" key={index}>{row}</div>)}
            </div>
        )
    })

    return (
        <div className={text.textclass.join(' ')}>
            {sections}
        </div>
    )
}

const MainGuide = (props) => {
    return (
        <div className={props.classchilds.classforthirdchild.join(' ')}>
            <div className="guide-item" onClick={() => {props.setguidetext(0)}}>Components and props</div>
            
            <GuideText guidetext={props.guidetext.firstguidetext} />
            
            <div className="guide-item" onClick={() => {props.setguidetext(1)}}>JSX</div>
            <div className="guide-item" onClick={() => {props.setguidetext(2)}}>State & lifecycle</div>
            
            <GuideText guidetext={props.guidetext.secondguidetext} />
            <GuideText guidetext={props.guidetext.thirdguidetext} />
            
            <div className="guide-item" onClick={() => {props.setguidetext(3)}}>Handling events</div>
            
            <GuideText guidetext={props.guidetext.fourthguidetext} />
            
            <div className="guide-item" onClick={() => {props.setguidetext(4)}}>Conditionals & lists</div>
            <div className="guide-item" onClick={() => {props.setguidetext(5)}}>Forms</div>
            
            <GuideText guidetext={props.guidetext.fifthguidetext} />
            <GuideText guidetext={props.guidetext.sixthguidetext} />
            
            <div className="guide-item" onClick={() => {props.setguidetext(6)}}>Hooks</div>
            
            <GuideText guidetext={props.guidetext.seventhguidetext} />
        </div>
    )
}

class Main extends React.Component {
    initialState = {
        guide: {
            firstguidetext: {
                textclass: ['guide-text'],
                content: [{
                    title: 'Function components & Class components',
                    sectioncontent: [
                        "The components let you make UI's into independent and reusable pieces.",
                        "The shape of the components are like JavaScript functions but we can use ES6 class to define a component. They accept inputs, called props, to return react elements (this elements discribes what should appear on the screen).",
                        "The props are read-only and needs to be declarated when we call a component."
                    ],
                    quote: [
                        'import React from "react"',
                        'const FunctionComponent = (props) => {',
                        'return <div>Hello {props.name}</div>',
                        '}',
                        'class ClassComponent extends React.Component {',
                        'render(',
                        'return <div>Hello {this.props.name} </div>',
                        ')',
                        '}'
                    ]
                },{
                    title: 'Calling a component',
                    sectioncontent: [
                        "We can call a component using tags as HTML syntax. That's possible thanks JSX (That we'll see in the next section).", 
                        "Every component may pass through ReactDOM component and charged in the HTML but we can call components inside components."
                    ],
                    quote: [
                        'import React from "react"',
                        'import ReactDOM from "react-dom"',
                        'const HelloMessage = (props) => {',
                        'return <div>Hello {props.name}</div>',
                        '}',
                        'ReactDOM.render(<HelloMessage user="Sofia" />, document.getElementById("root"))'
                    ]
                }]
            },
            secondguidetext: {
                textclass: ['guide-text'],
                content: [{
                    title: 'Syntaxis',
                    sectioncontent: [
                        "The code below is not a string or HTML. It's a syntax extension to JavaScript and helps us to describe what the UI shold look like.",
                        'In the second line we are wrapping a variable with curly braces and we are using a string as an attribute so we may use quotes.'
                    ],
                    quote: [
                        'const name = "Syd"',
                        'const element = <div className="message">Hello, {name}</div>'
                    ]
                }]
            },
            thirdguidetext: {
                textclass: ['guide-text'],
                content: [{
                    title: 'State',
                    sectioncontent: [
                        'State is similar to props but state is private and fully controlled by the component. Whatever we can share a state if we passed to other component as a props but the shared-component only can read not change.',
                        'This is the way to create a state. We may do it in a class component.'
                    ],
                    quote: [
                        'import React from "react"',
                        'import ReactDOM from "react-dom"',
                        'class Message extends React.Component {',
                        'state = {text: "Hello World"}',
                        'render(',
                        'return <div>{this.state.text}</div>',
                        ')',
                        '}',
                        'reactDOM.render(<Message />, document.getElementById("root"))'
                    ]
                },
                {
                    title: 'Lyfecycle',
                    sectioncontent: [
                        'Every component takes resources so we want to free up that resources when a component is destroyed.',
                        'React allows run some code when the component is rendered to the DOM, this is called "mounting", and run some code when the component is removed, this is called "unmounting".',
                        "In the next example we'll set state each second since the component rendered to the DOM. We need to use the setState method to do it and pass an object as a parameter.",
                    ],
                    quote: [
                        'import React from "react"',
                        'import ReactDOM from "react-dom"',
                        'class Clock extends React.Component {',
                        'state = {date: new Date()}',
                        'componentDidMount() {',
                        'const timerID = setInterval(() => this.tick(), 1000)',
                        '}',
                        'componentWillUnmount() {',
                        'clearInterval(this.timerID)',
                        '}',
                        'tick() {this.setState({date: new Date()})}',
                        'render(',
                        'return <div>{this.state.date}</div>',
                        ')',
                        '}',
                        'reactDOM.render(<Clock />, document.getElementById("root"))'
                    ]
                }]
            },
            fourthguidetext: {
                textclass: ['guide-text'],
                content: [{
                    title: 'Handling events with React elements ',
                    sectioncontent: [
                        'Handling events with React elements is too similar to do it in DOM elements but React events are named using camelCase and with JSX you pass a function as the event handler rather than a string.',
                        "Other differences is that we can't return false to prevent default behavior in React, we must call preventDefault, & we don't need to call 'addEventListener' using  React. Instead, just provide a listener when the element is rendering."   
                    ],
                    quote: [
                        'const sending = (e) => {',
                        'e.preventDefault()',
                        'console.log("sent")',
                        '}',
                        'return (',
                        '<button type="submit" onClick={sending}>SEND</button>',
                        ')'
                    ]
                }]
            },
            fifthguidetext: {
                textclass: ['guide-text'],
                content: [{
                    title: 'Conditionals',
                    sectioncontent: [
                        'Conditional in React works like JavaScript using operators like if or &&.',
                        'If we wanted to render a component or other depending on component state, we can use that operators in JSX syntax.',
                        'In the example we use && operator. It works because if the condition is true, the element right after and will appear in the output but if it is false, react will ignore and skip it.'
                ],
                    quote: [
                        'function MailBox = (props) => {',
                        'const unread_message = props.unreadMessage',
                        'return (',
                        '<div>',
                        '<h1>Hello!</h1>',
                        '{unread_message.length > 0 &&',
                        '<h2>You have {unread_message.length} unread messages.</h2>',
                        '}',
                        ')',
                        '}',
                        'reactDOM.render(<MailBox unreadMessage=["example", "re: example"]/>, document.getElementById("root"))'
                    ]
                },
                {
                    title: 'Lists',
                    sectioncontent: [
                        'When we wanna make a list, we should to provide a key for list items. A key is a string attribute that helps react identify what items have changed, are added or are removed.',
                        'This is the way we should to use key attribute:'
                    ],
                    quote: [
                        'function NumbersList = (props) => {',
                        'const numbers = props.numbers',
                        'const list_items = numbers.map(number => <li key={number.toString()}>{number}</li>)',
                        'return <ul>{list_items}</ul>',
                        '}',
                        'reactDOM.render(<NumbersList numbers=[1, 2, 3, 4, 5] />, document.getElementById("root"))'
                    ]
                }]
            },
            sixthguidetext: {
                textclass: ['guide-text'],
                content: [{
                    title: 'Controlled component',
                    sectioncontent: [
                        'In React, it is convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered. The standard way to do this is with a technique called "controlled components".',
                        'In HTML form elements, like inputs, tipically maintain their own state and update it based on user input. We can combine this with the state property of components in react if we made the react state as the single source. Then the react component controls what happens in the form. An input form element whose value is controlled by React in this way is called a “controlled component”.',
                        'Below you can see that with a controlled component, the input’s value is always driven by the React state.'
                    ],
                    quote: [
                        'class Form extends React.Component {',
                        'this.state = {value: ""}',
                        'handleChange = (event) => {',
                        'this.setState({value: event.target.value})',
                        '}',
                        'handleSubmit = (event) => {',
                        'event.preventDefault()',
                        'alert("A name was submitted: " + this.state.value)',
                        '}',
                        'render() {',
                        'return(',
                        '<form onSubmit={handleSubmit}>',
                        '<input value={this.state.value} onChange={this.handleChange} />',
                        '<input type="submit" value="send" />',
                        ')',
                        '}',
                        '}'
                    ]
                }]
            },
            seventhguidetext: {
                textclass: ['guide-text'],
                content: [{
                    title: 'Hooks',
                    sectioncontent: ["Hooks are a new addition and let us use state and other React features without class components. There's two big hooks, useState & useEffect, functions but we can create others."],
                    quote: []
                }]
            }
        }
    }

    state = this.initialState

    setGuideText = (index) => {
        const changeClass = (element) => {
            let open;

            if(this.state.guide[element].textclass.length === 1) open = true
            else open = false

            const newJSON = {
                guide: this.state.guide
            }

            for(const index in newJSON.guide) {
                newJSON.guide[index].textclass = ['guide-text']
            }

            if(open) newJSON.guide[element].textclass = ['guide-text', 'guide-text--on']
            

            this.setState({newJSON})
        }

        if(index === 0) changeClass('firstguidetext')
        if(index === 1) changeClass('secondguidetext')
        if(index === 2) changeClass('thirdguidetext')
        if(index === 3) changeClass('fourthguidetext')
        if(index === 4) changeClass('fifthguidetext')
        if(index === 5) changeClass('sixthguidetext')
        if(index === 6) changeClass('seventhguidetext')
        if(index === 7) changeClass('eighthguidetext')

    }

    render() {
        return (
            <main className="main">
                <img src="logo192.png" alt="react-img" className="main__img" />
                <MainInfo data={this.props.main_strings} classchilds={this.props.main_childs_class} />
                <MainGuide classchilds={this.props.main_childs_class} guidetext={this.state.guide} setguidetext={this.setGuideText}/>
            </main>
        )
    }
}

export default Main;