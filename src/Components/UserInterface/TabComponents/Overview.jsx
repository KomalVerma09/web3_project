import React,{useState} from 'react'
import Card from "../../Global/Card";
import NewProject from "../NewProject"; // Import your NewProject component
import baseImage from '../../../assets/images/base.png';
import ethereumImage from '../../../assets/images/ethereum.png';
import polygonImage from '../../../assets/images/pol-token.png';
import bnbImage from '../../../assets/images/bnb.png';
import '../../Dashboard/TabComponents/Overviews.css'

const Overview = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contractData, setContractData] = useState([
      {
        subtitle: "Frontend",
        title: "First UI",
        status: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore.",
        bottomElement: (
          <div className="flex gap-2">
            <div>
              <img className="w-5 h-5 rounded" src={baseImage} alt="Base" />
            </div>
            <div>
              <img className="w-5 h-5 rounded-full" src={ethereumImage} alt="Ethereum" />
            </div>
            <div>
              <img className="w-5 h-5 rounded" src={polygonImage} alt="Polygon" />
            </div>
            <div>
              <img className="w-5 h-5 rounded" src={bnbImage} alt="BNB" />
            </div>
          </div>
        ),
        imageUrl: "https://ui-avatars.com/api/?name=Frontend+Ui/?rounded=true",
      },
    ]);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const addNewContract = (newContract) => {
      setContractData((prevContract) => [...prevContract, newContract]);
    };
  
    return (
      <>
        <div className="bg-[#111827]">
          <div className="grid card-container gap-4 mb-4">
            {/* New Project Button */}
            <div
              className="flex items-center justify-center h-48 bg-gray-800 border-2 border-dashed border-gray-700 newProject cursor-pointer"
              onClick={openModal}
            >
              <p className="text-2xl text-gray-500">
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
  
            {contractData.map((contract, index) => (
              <Card key={index} cardData={contract} />
            ))}
            
          </div>
        </div>
  
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <NewProject onClose={closeModal} onCreateProject={addNewContract} />
          </div>
        )}
      </>
    );
  };


export default Overview