import Compo1 from "./compo1"
import Compo2 from "./compo2"
import "./style.css"
import HomeProject from "./homeProject"


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    } render() {
        return (
            <div>
                <NavBar />

            </div>
        )
    }
}

const lightStyle = {
    color: "black",
    backgroundColor: "rgb(240, 244, 245)",
    transition: ".7s"
}

const darkStyle = {
    color: "white",
    backgroundColor: "rgba(22,22,22,255)",
    transition: ".7s",
}




function NavBar(props) {
    const [mode, setMode] = React.useState(true)
    const [curMode, setCurMode] = React.useState("Light Mode")
    const [modeStyle, setModeStyle] = React.useState(lightStyle)
   

    function handleClick() {
        setMode(!mode)

        mode ? setCurMode("Dark Mode") : setCurMode("Light Mode")
        mode ? setModeStyle(darkStyle) : setModeStyle(lightStyle)
    }
    return (
        <div className="navBar">
            <ul>
                <li><a href="#homeImg">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a>Contact</a></li>
                
                {/* Switch for Dark or Light Mode */}
                <label className="switch">
                    <input onClick={handleClick} type="checkbox" />
                    <span className="slider round"></span>
                </label>
                
                <div className= "modeText"style={{float:'right', marginRight: '0.5rem'}}>
                <p style={{color:'white'}}><b>{curMode}</b></p>
                </div>

                <form className="searchBar">
                    <input placeholder="Search" id="searchB" style={modeStyle} type="text"></input>
                    <button name="submit" style={modeStyle} type="submit"><i className="fa fa-search"></i></button>
                </form>

            </ul>
            <MainImage />
            <div id="homeImg" className="mainBody">

                <MainText modeStyle={modeStyle} />
                <Project modeStyle={modeStyle} />
                <About modeStyle={modeStyle} />
            </div>
            <Footer />

        </div>

    )
}

function MainText(props) {
    return (
        <div style={props.modeStyle}>
            <p className="textItem">
                New
                According to YouTuber Coreteks and Moore’s Law is Dead who is quoting a leaker “Kepler”
                AMD is set to launch its Radeon RX 6600 XT graphics card at 399 USD. This is allegedly
                the current pricing plan for this Navi 23 based model.
                While neither of the sources is sure that this is the final price, it seems quite interesting
                that both have shared the exact same rumor in a span of a few hours. It clearly shows that AMD’s
                internal pricing information is leaking. Judging from how accurate previous reporting by those YouTubers was,
                the information shouldn’t just be ignored, although the 399 USD price tag is a lot more than was expected. In fact, this is just 80 USD less than RX 6700XT’s MSRP.
            </p>
        </div>
    )
}


function MainImage() {
    return (
        <div className="homePageImageBack">
            <img alt="saturn with black background" id="homepageImage" src="https://img5.goodfon.com/wallpaper/nbig/5/c7/planet-satellites-orbit-space-simple-background-black-backgr.jpg"></img>
        </div>
    )
}



function Project(props) {
    return (
        <div id="projects" style={props.modeStyle}>
            <div className="grid">
                <HomeProject project = {{title: 'Quote Generator', cover: "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"} } />
        
                <HomeProject project = {{title: 'TO-DO List', cover: "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png"} } />
                <div className="grid-item">
                    <h1>Project 1</h1>
                    <Compo1 />
                </div>



            </div>
        </div>
    )
}
function DataProject(props) {
    const placeHolderImage = "https://i.etsystatic.com/13242595/r/il/3e330f/1263105563/il_570xN.1263105563_5gzb.jpg"
    return (
        <div>
            <Project name="Caluclator" image={placeHolderImage} />
            <Project name="Quote" image={placeHolderImage} />
            <Project name="Clock" image={placeHolderImage} />
        </div>
    )
}
function About(props) {
    return (
        <div id="about" className="about" style={props.modeStyle}>
            <p className="textItem">
                about
                preposition
                UK  /əˈbaʊt/ US  /əˈbaʊt/
                about preposition (CONNECTED WITH)

                A1
                on the subject of, or connected with:
                What's that book about?
                a film about the Spanish Civil War
                We were talking/laughing about Sophie
            </p>
        </div>
    )
}

function Footer(props) {
    return (
        <div>
            <footer>
                <p>
                    By Vincent S
                </p>
            </footer>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))