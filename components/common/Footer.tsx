export default function Footer() {
    return (
        <footer className='bg-gray-100 h-16'>
            <div className='h-full px-2'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-gray-400 text-sm'>
                        &copy; {new Date().getFullYear()} Maxicom IT Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}