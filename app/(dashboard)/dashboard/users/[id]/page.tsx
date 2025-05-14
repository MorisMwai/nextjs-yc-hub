import React from 'react'

const Page = ({ params}: { params: { id: string }}) => {
    const { id } = params;

    return (
        <h1 className="2xl">User Profile: {id}</h1>
    )
}
export default Page
