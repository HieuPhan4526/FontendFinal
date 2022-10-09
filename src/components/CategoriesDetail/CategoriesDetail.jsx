import React, { useEffect, useState } from 'react'
import { workService } from '../../services/WorkService'

export default function CategoriesDetail() {
  let [state, setState] = useState([]);

  console.log(state)
  useEffect(() => {
    const getData = () => {
      workService.GetCategoriesWorkDetail().then((result) => {
        setState(result.data.content);
      }).catch((error) => { console.log(error) })
    }
    getData()
  }, [])


  return (
    <div className='container'>
      <div className="row">
        <div className="col-3">1</div>
        <div className="col-3">1</div>
        <div className="col-3">1</div>
        <div className="col-3">1</div>
      </div>
    </div>
  )
}
