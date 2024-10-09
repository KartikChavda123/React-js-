import React, { useState } from "react";

export default function Prfilter() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");

    const arr = [
        {
            name: "Buds",
            subject: "Buds",
            image: "./a1.jpg",
            variety: "Mivi DuoPods i7",
            price: "₹1000",
        },
        {
            name: "Buds",
            subject: "Buds",
            image: "./a2.jpg",
            variety: "JLAB Go Air Sport TWS Sports Earbuds",
            price: "₹1500",
        },
        {
            name: "Buds",
            subject: "Buds",
            image: "./a3.jpg",
            variety: "boAt Airdopes Atom 81 Pro Truly Wireless in Ear Ear Buds",
            price: "₹2500",
        },
        {
            name: "Buds",
            subject: "Buds",
            image: "./a10.jpg",
            variety: "Redmi Buds 5C Bluetooth TWS in Ear Earbuds",
            price: "₹1800",
        },
        {
            name: "Buds",
            subject: "Buds",
            image: "./a5.jpg",
            variety: "OnePlus Nord Buds 2r True Wireless in Ear Earbuds",
            price: "₹1700",
        },
        {
            name: "Buds",
            subject: "Buds",
            image: "./a6.jpg",
            variety: "OnePlus Nord Buds 2r True Wireless in Ear Earbuds",
            price: "₹1900",
        },
        {
            name: "Buds",
            subject: "Buds",
            image: "./a7.jpg",
            variety: "realme Buds T110 with Ai Enc for Calls",
            price: "₹1500",
        },
        {
            name: "Buds",
            subject: "Buds",
            image: "./a8.jpg",
            variety: "OnePlus Nord Buds 2 TWS in Ear Earbuds",
            price: "₹2000",
        },
        {
            name: "T110",
            subject: "Buds",
            image: "./a9.jpg",
            variety: "realme Buds T110 with Ai Enc ",
            price: "₹1700",
        },
        {
            name: "mobile accessory",
            subject: "mobile accessory",
            image: "./a11.jpg",
            variety: "Amkette Flexi Phone Tabletop Holder,",
            price: "₹1600",
        },
        {
            name: "mobile accessory",
            subject: "mobile accessory",
            image: "./b1.jpg",
            variety: "Spigen Tough Armor Back Cover Case",
            price: "₹760",
        },
        {
            name: "mobile accessory",
            subject: "mobile accessory",
            image: "./b2.jpg",
            variety: "Tensea Mobile Phone Charging Stand,",
            price: "₹1,919",
        },
        {
            name: "mobile accessory",
            subject: "mobile accessory",
            image: "./b3.jpg",
            variety: "Sounce Spiral Charger Cable Protector Data Cable",
            price: "₹88",
        },
        {
            name: "mobile accessory",
            subject: "mobile accessory",
            image: "./b4.jpg",
            variety: "Sounce Waterproof New Bike Phone Mount Anti Shake and Stable 360",
            price: "₹59",
        },
        {
            name: "mobile accessory",
            subject: "mobile accessory",
            image: "./b5.jpg",
            variety: "EASYSHOP Multi Retractable 3.0A Fast Charger Cord,",
            price: "₹89",
        },
        {
            name: "mobile accessory",
            subject: "mobile accessory",
            image: "./b6.jpg",
            variety: "STRIFF 25 Pieces Highly Flexible Silicone cable protectors",
            price: "₹149",
        },
        {
            name: "mobile accessory",
            subject: "mobile accessory",
            image: "./b7.jpg",
            variety: "NOCXTUN PR-300 Tabletop Mobile Stand",
            price: "₹58",
        },
        {
            name: "mobile accessory",
            subject: "mobile accessory",
            image: "./b8.jpg",
            variety: "Humble Waterproof Bike Phone Mount Anti Shake and Stable 360",
            price: "₹79",
        },
        {
            name: "mobile accessory",
            subject: "mobile accessory",
            image: "./b9.jpg",
            variety: "Portronics Clamp M2 Adjustable Car Mobile Phone Holder",
            price: "₹248",
        },
        {
            name: "mobile accessory",
            subject: "mobile accessory",
            image: "./b10.jpg",
            variety: "Tygot Bluetooth Extendable Selfie Sticks",
            price: "₹299",
        },
    ];

    const data = arr.filter((item) => (subject ? item.subject === subject : true) && (name ? item.name.toLowerCase().includes(name.toLowerCase()) : true));

    return (
        <div style={{ padding: "20px" }}>
            <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} style={{ marginBottom: "20px", padding: "10px", width: "200px" }} />

            <select onChange={(e) => setSubject(e.target.value)} style={{ marginBottom: "20px", padding: "10px" }}>
                <option value="">All Subjects</option>
                <option value="Buds">Buds</option>
                <option value="mobile accessory">mobile accessory</option>
            </select>

            <div style={{ display: "flex", gap: "10px", flexWrap:"wrap"}}>
                {data.length > 0 ? (data.map((e, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
                        
                        {e.image && (
                            <img src={e.image} alt={e.variety} style={{ width: "150px", height: "150px", borderRadius: "5px" }} />
                        )}

                        <h3>Variety: {e.variety}</h3>
                        <p>Price: {e.price}</p>
                    </div>
                ))
                ) : (
                    <p>No items found.</p>
                )}
            </div>
        </div>
    );
}