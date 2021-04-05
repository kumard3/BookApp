import React from 'react'
import BookCard from './components/BookCard'
import Card from './components/Card'
import SmallCard from './components/SmallCard'
import SmallHeader from './components/SmallHeader'
import Footer from './Footer'

function Main() {
    return (
        <div>
        <SmallHeader/>
            <SmallCard/>
            <Card/>
            <BookCard/>
            <Footer/>
        </div>
    )
}

export default Main
