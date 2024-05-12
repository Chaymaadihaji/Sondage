import React from 'react'
import Nav from './layouts/navbar'
import Footer from './layouts/footer'
import Sondage from './layouts/Sondage'
import { db } from '../fireBase/fireBase'
import { collection } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

function Survey() {
  const col = collection(db, "surveys")
  const [values, loading, error] = useCollectionData(col)

  return (
    <>
    <div className="bg-black h-max">
    <Nav/>
    <div className="grid place-items-center">
    {!loading && values.map(v => (
            <>
              <Sondage titre={v.titre} description={v.description} />

            </>
          ))}
        
        
    </div>
   
    <Footer/>
     </div>
    </>
  )
}

export default Survey