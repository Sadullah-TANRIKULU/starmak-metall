const K3DFTable = () => {
    return ( 
        <div className="flex justify-center w-full px-4 sm:pl-52 sm:pr-48 py-[1.6rem]">
                <div className="w-full">
                    <table className="w-full border">

                        {/* <!-- table head --> */}
                        <thead className="border w-full">
                            <tr className="border border-[#9EA2A3] font-semibold text-[#fff] bg-[#6B6E6F] w-[12.4rem] h-14">
                                <th className="border border-[#9EA2A3] w-[12.4rem] h-14">Stok</th>
                                <th className="border border-[#9EA2A3] w-[21rem]">Kod</th>
                                <th className="border border-[#9EA2A3] w-[12.4rem] h-14">d1m7</th>
                                <th className="border border-[#9EA2A3] w-[12.4rem] h-14">d2h6</th>
                                <th className="border border-[#9EA2A3] w-[12.4rem] h-14">I1</th>
                                <th className="border border-[#9EA2A3] w-[12.4rem] h-14">I2</th>
                                <th className="border border-[#9EA2A3] bg-[#E30613] w-[12.4rem] h-14">I3</th>
                            </tr>
                        </thead>

                        {/* <!-- table body --> */}
                        <tbody className="border">
                            <tr className="border border-[#fff] font-medium text-[#000] bg-[#eee] w-[12.4rem] h-14">
                                <th className="border border-[#fff]">*</th>
                                <td className="border border-[#fff]">K3DF030062</td>
                                <td className="border border-[#fff]">3</td>
                                <td className="border border-[#fff]">6</td>
                                <td className="border border-[#fff]">62</td>
                                <td className="border border-[#fff]">18</td>
                                <td className="border border-[#fff] text-[#E30613]">20</td>
                            </tr>
                            <tr className="border border-[#fff] font-medium text-[#000] bg-[#eee] w-[12.4rem] h-14">
                                <th className="border border-[#fff]"></th>
                                <td className="border border-[#fff]">K3DF030062</td>
                                <td className="border border-[#fff]">3.1</td>
                                <td className="border border-[#fff]">6</td>
                                <td className="border border-[#fff]">62</td>
                                <td className="border border-[#fff]">18</td>
                                <td className="border border-[#fff] text-[#E30613]">20</td>
                            </tr>
                            <tr className="border border-[#fff] font-medium text-[#000] bg-[#eee] w-[12.4rem] h-14">
                                <th className="border border-[#fff]">*SP</th>
                                <td className="border border-[#fff]">K3DF030062</td>
                                <td className="border border-[#fff]">3.2</td>
                                <td className="border border-[#fff]">6</td>
                                <td className="border border-[#fff]">62</td>
                                <td className="border border-[#fff]">18</td>
                                <td className="border border-[#fff] text-[#E30613]">20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
     );
}
 
export default K3DFTable;