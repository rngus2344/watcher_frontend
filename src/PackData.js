import React from 'react'
import { ResponsiveContainer, LineChart, AreaChart, XAxis, YAxis, Tooltip, CartesianGrid, Line, Area } from 'recharts';
const PackData = ({stats}) => {
    return (
        <div >
          <ResponsiveContainer class='charts'  width='100%' height={400}>
            <AreaChart  width={500} height={300} data={stats}
            margin = {{
              top: 10, right: 500, left: 500, bottom: 10,
            }}>
        <defs>
          <linearGradient id="colorhttp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="coloripv4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82cc46" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82cc46" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="coloripv6" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorudp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8883a5" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8883a5" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colortcp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#88862a" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#88862a" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colordns" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#888c5d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#888c5d" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorssl" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#88823c" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#88823c" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="time"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Tooltip />
        <Area type="monotone" dataKey="TCP" stroke="#8884d8" fillOpacity={1} fill="url(#colortcp)" />
        <Area type="monotone" dataKey="HTTP" stroke="#8884d8" fillOpacity={1} fill="url(#colorhttp)" />
        <Area type="monotone" dataKey="UDP" stroke="#82ca9d" fillOpacity={1} fill="url(#colorudp)" />
        <Area type="monotone" dataKey="IPV4" stroke="#82ca9d" fillOpacity={1} fill="url(#coloripv4)" />
        <Area type="monotone" dataKey="IPV6" stroke="#82ca9d" fillOpacity={1} fill="url(#coloripv6)" />
        {/* <Area type="monotone" dataKey="ETH" stroke="#82ca9d" fillOpacity={1} fill="url(#coloreth)" /> */}
        <Area type="monotone" dataKey="SSL" stroke="#82ca9d" fillOpacity={1} fill="url(#colorssl)" />
        <Area type="monotone" dataKey="DNS" stroke="#82ca9d" fillOpacity={1} fill="url(#colordns)" />
        <Tooltip />
        </AreaChart>
        </ResponsiveContainer>
        
        <AreaChart width={500} height={300} data={stats}>
        <defs>
          <linearGradient id="colorhttp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="coloripv4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82cc46" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82cc46" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="coloripv6" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorudp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8883a5" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8883a5" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colortcp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#88862a" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#88862a" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colordns" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#888c5d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#888c5d" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorssl" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#88823c" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#88823c" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="time"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Tooltip />
        {/* <Area type="monotone" dataKey="TCP" stroke="#8884d8" fillOpacity={1} fill="url(#colortcp)" /> */}
        <Area type="monotone" dataKey="HTTP" stroke="#8884d8" fillOpacity={1} fill="url(#colorhttp)" />
        <Area type="monotone" dataKey="UDP" stroke="#82ca9d" fillOpacity={1} fill="url(#colorudp)" />
        {/* <Area type="monotone" dataKey="IPV4" stroke="#82ca9d" fillOpacity={1} fill="url(#coloripv4)" /> */}
        {/* <Area type="monotone" dataKey="IPV6" stroke="#82ca9d" fillOpacity={1} fill="url(#coloripv6)" /> */}
        {/* <Area type="monotone" dataKey="ETH" stroke="#82ca9d" fillOpacity={1} fill="url(#coloreth)" /> */}
        <Area type="monotone" dataKey="SSL" stroke="#82ca9d" fillOpacity={1} fill="url(#colorssl)" />
        <Area type="monotone" dataKey="DNS" stroke="#82ca9d" fillOpacity={1} fill="url(#colordns)" />
        <Tooltip />
        </AreaChart>
        
        </div>
    )
}

export default PackData
