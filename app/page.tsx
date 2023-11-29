'use client'

import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import ProductList from "@/components/ProductList"
import Hero from "@/components/hero"
import { Button } from "@/components/ui/button"
import { CartProvider } from "@/context/CartContext"
import { LanguageProvider } from "@/context/LanguageContext"
import Link from "next/link"


export default function Home() {
  return (
    <CartProvider>
      <LanguageProvider>
        <main>
          <NavBar />
          <Hero />
          <ProductList />
          <Footer />
        </main>
      </LanguageProvider>
    </CartProvider >
  )
}
