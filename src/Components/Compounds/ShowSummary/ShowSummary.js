import { useState, useEffect } from 'react';
import './ShowSummary.css';
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useHistory } from "react-router-dom";


function ShowSummary() {

    const params = useParams();

    const [data, setData] = useState([]);

    

    const getData=()=>{

        setData(JSON.parse(localStorage.getItem('data'))[params.id - 1]);
        
    }
    useEffect(()=>{
        getData()
    
    
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    let history = useHistory();



    return(
        <>
        <div className='summary-view'>
            <Navbar colors={true}/>
            <div className='compount-details-container'>
                {/*<div className='compound-name'><h3>Showing Compound {data.compound_name}</h3></div>

                <div className='compound-heading'><span><h4>Info</h4></span></div>
                <div className='compound-details'><h4>Accession No:</h4> <p className='access_id'>{data.accession_no}</p></div>

                <div className='compound-details'><h4>PUBCHEM ID: </h4><p><a rel="noreferrer" href={'https://pubchem.ncbi.nlm.nih.gov/#query='+data.pubchem_cid}>{data.pubchem_cid}</a></p></div>
                <div className='compound-details'><h4>Molecular Formula: </h4><p>{data.molf}</p></div>
                <div className='compound-details'><h4>Molecular Weight: </h4><p>{data.mw}</p></div>
                <div className='compound-details'><h4>Mode of Action: </h4><p>{data.moa}</p></div>
                <div className='compound-details'><h4>Origin: </h4><p>{data.origin}</p></div>
                <div className='compound-details'><h4>Scientific Name: </h4><p style={{fontStyle:"italic"}}>{data.sci_name}</p></div>
                <div className='compound-details'><h4>Class of compounds: </h4><p>{data.class_comp}</p></div>
                <div className='compound-details'><h4>Biological Activity</h4> <p>(IC50 values/ KI )</p><h4>: </h4><p>{data.bio_act}</p></div>

                <div className='compound-heading'><span><h4>Structural Information</h4></span></div>
                <div className='compound-details'><h4>IUPAC Name: </h4><p>{data.iupac_name}</p></div>
                <div className='compound-details'><h4>Canonical Smiles: </h4><p>{data.canl_smiles}</p></div>
                <div className='compound-details'><h4>InchI: </h4><p>{data.inchl}</p></div>

                <div className='compound-heading'><span><h4>Predicted Properties</h4></span></div>
                <div className='compound-details'><h4>xlogP<sub>3</sub>: </h4><p>{data.xlogp3}</p></div>
                <div className='compound-details'><h4>H-Bond Donor: </h4><p>{data.h_bond_d}</p></div>
                <div className='compound-details'><h4>H-Bond Acceptor: </h4><p>{data.h_bond_a}</p></div>
                <div className='compound-details'><h4>Molar Refraction: </h4><p>{data.mol_refa}</p></div>
                <div className='compound-details'><h4>TPSA: </h4><p>{data.tpsa}</p></div>
                <div className='compound-details'><h4>No. of rotatable Bonds: </h4><p>{data.rot_bonds}</p></div>
                <div className='compound-details'><h4>No. of heavy Atoms: </h4><p>{data.heavy_atoms}</p></div>
                <div className='compound-details'><h4>Lipinski - Drug likeness: </h4><p>{data.lipinski}</p></div>
                <div className='compound-details'><h4>BBB Permeant: </h4><p>{data.bbb_per}</p></div>
                <div className='compound-details'><h4>Bioavailability Score: </h4><p>{data.bioavail}</p></div>

                <div className='compound-heading'><span><h4>Toxicity Predited</h4></span></div>
                <div className='compound-details'><h4>LD50 values: </h4><p>{data.ld50_val}</p></div>
                <div className='compound-details'><h4>Toxicity Class: </h4><p>{data.toxicity}</p></div>
                
                <div className='compound-heading'><span><h4>Reference</h4></span></div>
                <div className='compound-details'><h4>Reference Article DOI: </h4><p><a rel="noreferrer" href={'https://dx.doi.org/'+data.ref_doi}>{data.ref_doi}</a></p></div>
                <div className='compound-details'><h4>Year of Publication: </h4><p>{data.yop}</p></div>
    <div className='compound-details'><h4>Name of Journal: </h4><p>{data.jonl_name}</p></div>*/}
                <div className='compound-name'>
                    <h1>Showing Compound {data.compound_name}</h1>
                    <button onClick={() => history.goBack()}>Back to Compounds</button>
                </div>
                <hr></hr>
                <table className="com-table-container" style={{tableLayout:'fixed'}}>
                    <tr>
                        <th className='table-row-title' colspan="2" scope="colgroup">Info</th>
                        <th className='table-row-title' style={{textAlign:"center"}}>2D-Structure</th>
                        <th className='table-row-title' style={{textAlign:"center"}}>3D-Structure</th>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>Accession No</h4></td>
                        <td className='compound-details' ><p className='access_id'>{data.accession_no}</p></td>
                        <td className='compound-details' rowSpan="8"><img src={'https://aopmdb-backend.herokuapp.com/static/2D STR/'+data.accession_no+'.png'} alt="2d-structure"></img></td>
                        <td className='compound-details' rowSpan="8"><img src={'https://aopmdb-backend.herokuapp.com/static/3D STR/'+data.accession_no+'.png'} alt="3d-structure"></img></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>PUBCHEM ID</h4></td>
                        <td className='compound-details' ><p><a rel="noreferrer" href={'https://pubchem.ncbi.nlm.nih.gov/#query='+data.pubchem_cid}>{data.pubchem_cid}</a></p></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>Molecular Formula</h4></td>
                        <td className='compound-details' ><p>{data.molf}</p></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>Molecular Weight</h4></td>
                        <td className='compound-details' ><p>{data.mw}</p></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>Mode of Action</h4></td>
                        <td className='compound-details' ><p>{data.moa}</p></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>Origin</h4></td>
                        <td className='compound-details' ><p>{data.origin}</p></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>Scientific Name</h4></td>
                        <td className='compound-details' ><p style={{fontStyle:"italic"}}>{data.sci_name}</p></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>Class of compounds</h4></td>
                        <td className='compound-details' ><p>{data.class_comp}</p></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>Biological Activity <p>(IC50 values/ KI )</p></h4></td>
                        <td className='compound-details' ><p>{data.bio_act}</p></td>
                        <td className="dowload-section"><i className="fa-solid fa-download"/>
                            <a href={"https://aopmdb-backend.herokuapp.com/static/2D STR/"+data.accession_no+'.sdf'} download>
                                SDF -2D Structure
                            </a> 
                        </td>
                        <td className="dowload-section"><i className="fa-solid fa-download"/>
                            <a href={"https://aopmdb-backend.herokuapp.com/static/3D STR/"+data.accession_no+'.sdf'} download>
                                SDF -3D Structure
                            </a> 
                        </td>
                    </tr>
                </table>
                <table className="com-table-container" >
                    <tr>
                        <th className='table-row-title' colspan="2" scope="colgroup">Structural Information</th>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>IUPAC Name</h4></td>
                        <td className='compound-details' ><p>{data.iupac_name}</p></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>Canonical Smiles</h4></td>
                        <td className='compound-details' ><p>{data.canl_smiles}</p></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>InchI</h4></td>
                        <td className='compound-details' ><p>{data.inchl}</p></td>
                    </tr>
                </table> 
                <table className="com-table-container" style={{tableLayout:'fixed'}}>
                    <tr>
                        <th className='table-row-title' colspan="4" scope="colgroup">Predicted Properties</th>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>xlogP<sub>3</sub></h4></td>
                        <td className='compound-details' ><p>{data.xlogp3}</p></td>
                        <td className='compound-heading' ><h4>H-Bond Donor</h4></td>
                        <td className='compound-details' ><p>{data.h_bond_d}</p></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>H-Bond Acceptor</h4></td>
                        <td className='compound-details' ><p>{data.h_bond_a}</p></td>
                        <td className='compound-heading' ><h4>Molar Refraction</h4></td>
                        <td className='compound-details' ><p>{data.mol_refa}</p></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>TPSA</h4></td>
                        <td className='compound-details' ><p>{data.tpsa}</p></td>
                        <td className='compound-heading' ><h4>No. of rotatable Bonds</h4></td>
                        <td className='compound-details' ><p>{data.heavy_atoms}</p></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>No. of heavy Atoms</h4></td>
                        <td className='compound-details' ><p>{data.heavy_atoms}</p></td>
                        <td className='compound-heading' ><h4>Lipinski - Drug likeness</h4></td>
                        <td className='compound-details' ><p>{data.lipinski}</p></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>BBB Permeant</h4></td>
                        <td className='compound-details' ><p>{data.bbb_per}</p></td>
                        <td className='compound-heading' ><h4>Bioavailability Score</h4></td>
                        <td className='compound-details' ><p>{data.bioavail}</p></td>
                    </tr>
                </table>
                <table className="com-table-container" style={{tableLayout:'fixed'}}>
                    <tr>
                        <th className='table-row-title' colspan="4" scope="colgroup">Toxicity Predited</th>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>LD50 values</h4></td>
                        <td className='compound-details' ><p>{data.ld50_val}</p></td>
                        <td className='compound-heading' ><h4>Toxicity Class</h4></td>
                        <td className='compound-details' ><p>{data.toxicity}</p></td>
                    </tr>
                </table> 
                <table className="com-table-container">
                    <tr>
                        <th className='table-row-title' colspan="2" scope="colgroup">Reference</th>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>Reference Article DOI</h4></td>
                        <td className='compound-details' ><p><a rel="noreferrer" href={'https://dx.doi.org/'+data.ref_doi}>{data.ref_doi}</a></p></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>Year of Publication</h4></td>
                        <td className='compound-details' ><p>{data.yop}</p></td>
                    </tr>
                    <tr>
                        <td className='compound-heading' ><h4>Name of Journal</h4></td>
                        <td className='compound-details' ><p>{data.jonl_name}</p></td>
                    </tr>
                </table>               
            </div>
            {/*<div className="image-container">
                <table>
                    <tr >
                        <th className="table-heading">2D-Structure</th>
                        <th className="table-heading">3D-Structure</th>
                    </tr>
                    <tr>
                        <td><img src={'https://aopmdb-backend.herokuapp.com/static/2D STR/'+data.accession_no+'.png'} alt="2d-structure"></img></td>
                        <td><img src={'https://aopmdb-backend.herokuapp.com/static/3D STR/'+data.accession_no+'.png'} alt="3d-structure"></img></td>
                    </tr>
                    <tr className="table-button">
                        <td className="dowload-section"><i className="fa-solid fa-download"/>
                            <a href={"https://aopmdb-backend.herokuapp.com/static/2D STR/"+data.accession_no+'.sdf'} download>
                                SDF -2D Structure
                            </a> 
                        </td>
                        <td className="dowload-section"><i className="fa-solid fa-download"/>
                            <a href={"https://aopmdb-backend.herokuapp.com/static/3D STR/"+data.accession_no+'.sdf'} download>
                                SDF -3D Structure
                            </a> 
                        </td>
                    </tr>
                </table>                                        
    </div>*/}
        </div>
        </>
    )
}


export default ShowSummary;