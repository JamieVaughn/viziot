/* global Headers */
/* global btoa */
import React, { useState, useEffect } from 'react';
import { streamURL, mockListStreams } from '../utils/utils'
import Loading from './Loading'
import BarChart from './BarChart'

const StreamsList = (props) => {
  const [streams, setStreams] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const detail = streamURL('16232eab-6a3e-4131-8c64-12b4aadaca0d')
  
  const handleClick = () => {
    setLoading(true)
    mockListStreams().then(data => {
        console.log('d', data)
        setStreams(data.streams)
      }).catch(err => {
        console.log(err)
        setError(err)
      }).finally(() => setLoading(false))
  }
  
  const handleInput = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value)
  }

  useEffect(() => {
    let search = new RegExp(query, 'gi')
    let inter = streams.filter(s => s.unit.match(search)).reduce((a, c) => {
      if(a[c.unit]) {
        a[c.unit] = a[c.unit] + 1
      } else {
        a[c.unit] = 1
      }
      return a
    }, {})
    console.log(inter)
    let d = Object.entries(inter).map(entry => ({unit: entry[0], value: entry[1]}))
    console.log('inter', d)
    // [{unit: 'IPHM', value: 10}, ...]
    setData(d)
  }, [query, streams])
  
  if(error) return <Error error={error}/>
  
  return (
    <div className="grid">
      <div>
        {loading ? <Loading /> :
          <>
            <label>View Streams: <br />
              <button onClick={handleClick}>List Streams</button>
              <br />
              <label htmlFor="input">Filter:
                <input id="input" value={query} onChange={handleInput} />
              </label>
            </label>
            {
              streams.length === 0 ? <h4>No Streams Loaded.</h4> :
              <div>
                <h3>Here's a list of streams:</h3>
                <ul className="flex">
                  {streams.filter(s => s.unit.match(new RegExp(query, 'gi'))).map(s => (
                    <li key={s.url}>{s.name}: <span className="unit">{s.unit}</span></li>
                  ))}
                </ul>
              </div>
            }
          </>
        }
      </div>
      <BarChart  data={data}/>
    </div>
  )
};

export default StreamsList;
