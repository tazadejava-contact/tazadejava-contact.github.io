export default function Page(): JSX.Element {
    return <div className="w-screen h-screen items-center justify-center flex flex-col px-[25%]">
        <div className="font-bold text-5xl text-center pb-8">
            Budget Buddy
        </div>
        <div className="font-bold text-2xl text-center pb-4">
            Privacy Policy
        </div>
        <div className="text-center">
            Budget Buddy runs completely offline. Expenses are tracked manually and stored securely on the phone's local filesystem. No budget category, expense, or transaction data is shared to any outside parties aside from the user of the app. The app provides an option to export budget expenses. However, expenses are exported at the discretion of the user and Budget Buddy is not responsible for exposed information, i.e. if the data is placed in an insecure location. Happy budgeting!
        </div>
    </div>
}