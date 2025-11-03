import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'

export default function Home() {
    return (
        <div className='mt-10'>
            {/* ---- Banner section --- */}
            <MainBanner />
            {/* ---- Categoris section --- */}
            <Categories />
            {/* ---- Best Seller section --- */}
            <BestSeller />
            {/* ---- Banner  section --- */}
            {/* <BottomBanner /> */}

        </div>
    )
}
