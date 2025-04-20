function HalamanEmpat () {
    return (
        <div className="w-full h-full py-4 bg-amber-100 bg-fixed">
            <div className="text-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-red-400 bg-clip-text text-transparent">
                    Helva Burik ❤︎
                </h1>
            </div>
            <div className="mx-auto max-w-[1200px] overflow-y-scroll">
                <div className="grid grid-cols-1 gap-4 p-3 rounded-4xl">
                    <img src="/image/img3.jpg" alt="" className="w-full rounded-2xl shadow-2xl"/>
                    <img src="/image/img4.png" alt="" className="mx-auto w-full rounded-2xl shadow-2xl"/>
                    <img src="/image/img5.jpg" alt="" className="w-full rounded-3xl shadow-2xl"/>
                    <img src="/image/img6.jpg" alt="" className="w-full rounded-3xl shadow-2xl"/>
                </div>
            </div>
        </div>
    )
}
export default HalamanEmpat;