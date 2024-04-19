import React from "react";
import { Route, Routes } from "react-router-dom";
import { 
    About, 
    AddPartner, 
    BankLoanRating, 
    BankLoanSyndication, 
    BusinessPlanPreparation, 
    BusinessTaxFiling, 
    CMAReportPreparation, 
    CancelGSTRegistration, 
    ChangeCompanyName, 
    CollateralFreeLoan, 
    Contact, 
    CopyrightRegistration, 
    CreditScoreCheck, 
    Demo, 
    ESIReturn, 
    Home, 
    IncreaseAuthorizedCapital, 
    LimitedLiabilityPartnership, 
    MOAAmendment, 
    OnePersonCompany, 
    Partnership, 
    Payment,
    PrivateLimitedCompany,
    Proprietorship, 
    PublicLimitedCompany,
    RegisteredOfficeChange,
    RemoveDirectors,
    ShareTransfer,
    TDSReturn,
    TermLoan,
    TrademarkObjection,
    TrademarkRegistration,
    TrademarkRenewal,
    WindingUpofCompany,
    WindingUpofLLP,
    WorkingCapital
} from "../Viwes";






















const AppRouter =() =>{
    return(
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" exact element={<About/>}/>
            <Route path="/contactus" exact element={<Contact/>}/>
            <Route path="/payment" exact element={<Payment/>}/>
            <Route path="/service/start_a_business/proprietorship" exact element={<Proprietorship/>}/>
            <Route path="/service/start_a_business/partnership" exact element={<Partnership/>}/>
            <Route path="/service/start_a_business/one_person_company" exact element={<OnePersonCompany/>}/>
            <Route path="/service/start_a_business/limited_liability_partnership" exact element={<LimitedLiabilityPartnership/>}/>
            <Route path="/service/start_a_business/private_limited_company" exact element={<PrivateLimitedCompany/>}/>
            <Route path="/service/start_a_business/public_limited_company" exact element={<PublicLimitedCompany/>}/>
            <Route path="/service/tax_filing/business_tax_filing" exact element={<BusinessTaxFiling/>}/>
            <Route path="/service/tax_filing/TDS_return" exact element={<TDSReturn/>}/>
            <Route path="/service/tax_filing/ESI_return" exact element={<ESIReturn/>}/>
            <Route path="/service/tax_filing/cancel_GST_registration" exact element={<CancelGSTRegistration/>}/>
            <Route path="/service/funding/bank_loan_syndication" exact element={<BankLoanSyndication/>}/>
            <Route path="/service/funding/collateral_free_loan" exact element={<CollateralFreeLoan/>}/>
            <Route path="/service/funding/working_capital" exact element={<WorkingCapital/>}/>
            <Route path="/service/funding/term_loan" exact element={<TermLoan/>}/>
            <Route path="/service/funding/credit_score_check" exact element={<CreditScoreCheck/>}/>
            <Route path="/service/funding/bank_loan_rating" exact element={<BankLoanRating/>}/>
            <Route path="/service/funding/CMA_report_preparation" exact element={<CMAReportPreparation/>}/>
            <Route path="/service/funding/business_plan_preparation" exact element={<BusinessPlanPreparation/>}/>
            <Route path="/service/compliance/change_company_name" exact element={<ChangeCompanyName/>}/>
            <Route path="/service/compliance/winding_up_of_LLP" exact element={<WindingUpofLLP/>}/>
            <Route path="/service/compliance/winding_up_of_company" exact element={<WindingUpofCompany/>}/>
            <Route path="/service/compliance/add_partner" exact element={<AddPartner/>}/>
            <Route path="/service/compliance/MOA_amendment" exact element={<MOAAmendment/>}/>
            <Route path="/service/compliance/share_transfer" exact element={<ShareTransfer/>}/>
            <Route path="/service/compliance/increase_authorized_capital" exact element={<IncreaseAuthorizedCapital/>}/>
            <Route path="/service/compliance/remove_directors" exact element={<RemoveDirectors/>}/>
            <Route path="/service/compliance/registered_office_change" exact element={<RegisteredOfficeChange/>}/>
            <Route path="/trademarkcopyright/trademark_registration" exact element={<TrademarkRegistration/>}/>
            <Route path="/trademarkcopyright/trademark_objection" exact element={<TrademarkObjection/>}/>
            <Route path="/trademarkcopyright/trademark_renewal" exact element={<TrademarkRenewal/>}/>
            <Route path="/trademarkcopyright/copyright_registration" exact element={<CopyrightRegistration/>}/>
            <Route path="/demo" exact element={<Demo/>}/>
           
           
        </Routes>
    )
}

export default AppRouter
