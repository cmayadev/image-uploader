import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Uploaded = ({ image }) => {
    return ( 
        <div>
            <CheckCircleIcon className='icon' />
            <h2 className="text-lg pt-2 pb-6">Uploaded Successfully!</h2>
            { image && <img className="rounded-xl mb-6 h-[224px] w-[338px]" src={image} alt="uploaded" /> }
            <div className='bg-[#F6F8FB] border-[1px] border-gray-200 flex items-center h-[34px] py-[2px] rounded-lg pl-2 pr-[2px] relative text-[8px]'>
                <span className='tracking-[-0.035em]'>https://images.yourdomain.com/photo-1496950866446-325...</span>
                <button className='bg-[#2F80ED] rounded-lg h-[90%] w-[74px] text-white absolute right-[2px]'>Copy Link</button>
            </div>
        </div>
    );
}

export default Uploaded;