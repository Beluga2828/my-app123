import { useContext, useState } from "react";
import { createContext } from "react";

export default function List1() {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div className={(isFancy ? 'fancy' : 'faner')} style={{padding: '10px'}}>
      <span style={{ backgroundColor: 'white',padding:'3px', borderRadius:'30px' }}> {isFancy ? <button onClick={() => setIsFancy(false)} style={{ backgroundColor: 'purple', marginRight: '30px',padding:'8px', borderRadius: '10px' }}></button> : <button onClick={() => setIsFancy(true)} style={{ backgroundColor: 'black', marginLeft: '30px',marginTop:'5px',padding:'8px', borderRadius: '10px' }}></button>}
      </span><Section isFancy={isFancy}>
        <Header>level 1 headin</Header>
        <Section>
          <Header >level 2 headin</Header>
          <Header >level 2 headin</Header>
          <Header >level 2 headin</Header>
          <Section>
            <Header>level 3 heading</Header>
            <Header>level 3 heading</Header>
            <Header>level 3 heading</Header>
            <Section>
              <Header >level 4 headin</Header>
              <Header >level 4 headin</Header>
              <Header >level 4 headin</Header>
              <Section>
                <Header >level 5 headin</Header>
                <Header >level 5 headin</Header>
                <Header >level 5 headin</Header>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section></div>
  )
}

function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  return (
    <section className={'section'}>
      <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider></section>
  )
}
function Header({ children }) {
  const level = useContext(LevelContext)
  switch (level) {
    case 1: return <h1>{children}</h1>
    case 2: return <h2>{children}</h2>
    case 3: return <h3>{children}</h3>
    case 4: return <h4>{children}</h4>
    case 5: return <h5>{children}</h5>
    default:
      throw Error('unknwon case' + level)
  }
}

const LevelContext = createContext(0);