
import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Dashboard from "@/pages/Dashboard";
import Pricing from "@/components/Pricing/Pricing";
import Checkout from "@/pages/Checkout";
import PaymentSuccess from "@/pages/PaymentSuccess";
import PaymentCancelled from "@/pages/PaymentCancelled";
import Talent from "@/pages/Talent";
import TalentMatching from "@/pages/TalentMatching";
import TalentSearch from "@/pages/TalentSearch";
import AgenticAI from "@/pages/AgenticAI";
import CRM from "@/pages/CRM";
import Naukriaaply from "./career/Apply"
import Analytics from "@/pages/Analytics";
import Payroll from "@/pages/Payroll";
import ProfessionalDevelopment from "@/pages/ProfessionalDevelopment";
import Skills from "@/pages/Skills";
import Settings from "@/pages/Settings";
import Compliance from "@/pages/Compliance";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import NotFound from "@/pages/NotFound";
import Index from "./pages/Mainindex";
import Unauthorized from "@/pages/Unauthorized";
import Integrations from "@/pages/Integrations";
import Onboarding from "@/pages/Onboarding";
import EnterpriseIntegrations from "@/pages/EnterpriseIntegrations";
import Resources from "@/pages/Resources";
import ITConsulting from "@/pages/ITConsulting";
import Sales from "./career/Sales Associate";
import Ai from "./career/AI Research Scientist";
import AdeptAIPageRelease from "./pages/Press";

import Web from "./career/Full Stack Web Developer";
import Full  from "./career/Full Stack Engineer";
import Machinelearning from "./career/Machine learning engineer"
import About from "./pages/About";
import Contact from "./pages/Contact";
import CareersPage from "./pages/career";

// Marketplace Pages
import Marketplace from "@/pages/Marketplace";
import TalentMarketplace from "@/pages/TalentMarketplace";
import SoftwareMarketplace from "@/pages/SoftwareMarketplace";
import AffiliateMarketplace from "@/pages/AffiliateMarketplace";
import Success from "./components/Pricing/success";
import Cancel from "./components/Pricing/cancel";


// Components
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/services/it-consulting" element={<ITConsulting />} />
       <Route path="/contact" element={<Contact />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
               <Route path="/about" element={<About />} />
              <Route path="/career" element={<CareersPage />} />
              <Route path="/Press" element={<AdeptAIPageRelease/>}/>
              <Route path="careers/sales-associate-it-consulting-ai-consulting-services/" element={<Sales/>}/>
              <Route path="/careers/ai-research-scientist" element={<Ai/>}/>
              <Route path="/careers/full-stack-engineer" element={<Full/>}/>
              <Route path="/careers/full-stack-web-developer-java-technologies-ai-saas-platform/" element={<Web/>}/>
              <Route path="/careers/machine-learning-engineer/" element={<Machinelearning/>}/>
      <Route path="/press-release" element={<AdeptAIPageRelease />} />
      <Route path="/apply" element={<Naukriaaply />} />

                        

      
      {/* Resources Routes */}
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/:category" element={<Resources />} />
      <Route path="/resources/:category/:slug" element={<Resources />} />
      
      {/* Marketplace Routes */}
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/marketplace/talent" element={<TalentMarketplace />} />
      <Route path="/marketplace/software" element={<SoftwareMarketplace />} />
      
      {/* Keep the old route temporarily for backwards compatibility */}
      <Route path="/affiliate-marketplace" element={<AffiliateMarketplace />} />
      
      {/* Protected Routes */}
      <Route path="/dashboard" element={<ProtectedRoute requiredPermission="viewDashboard"><Dashboard /></ProtectedRoute>} />
      <Route path="/checkout" element={<ProtectedRoute requiredPermission="viewDashboard"><Checkout /></ProtectedRoute>} />
      <Route path="/payment-success" element={<ProtectedRoute requiredPermission="viewDashboard"><PaymentSuccess /></ProtectedRoute>} />
      <Route path="/payment-canceled" element={<ProtectedRoute requiredPermission="viewDashboard"><PaymentCancelled /></ProtectedRoute>} />
      <Route path="/talent" element={<ProtectedRoute requiredPermission="viewDashboard"><Talent /></ProtectedRoute>} />
      <Route path="/talent-matching" element={<ProtectedRoute requiredPermission="viewDashboard"><TalentMatching /></ProtectedRoute>} />
      <Route path="/talent-search" element={<ProtectedRoute requiredPermission="viewDashboard"><TalentSearch /></ProtectedRoute>} />
      <Route path="/agentic-ai" element={<ProtectedRoute requiredPermission="viewDashboard"><AgenticAI /></ProtectedRoute>} />
      <Route path="/integrations" element={<ProtectedRoute requiredPermission="viewDashboard"><Integrations /></ProtectedRoute>} />
      <Route path="/dashboard/integrations" element={<ProtectedRoute requiredPermission="viewDashboard"><Integrations /></ProtectedRoute>} />
      <Route path="/dashboard/integrations/enterprise" element={<ProtectedRoute requiredPermission="viewDashboard"><EnterpriseIntegrations /></ProtectedRoute>} />
      <Route path="/crm" element={<ProtectedRoute requiredPermission="viewCRM"><CRM /></ProtectedRoute>} />
      <Route path="/analytics" element={<ProtectedRoute requiredPermission="viewAnalytics"><Analytics /></ProtectedRoute>} />
      <Route path="/payroll" element={<ProtectedRoute requiredPermission="viewDashboard"><Payroll /></ProtectedRoute>} />
      <Route path="/professional-development" element={<ProtectedRoute requiredPermission="viewDashboard"><ProfessionalDevelopment /></ProtectedRoute>} />
      <Route path="/skills" element={<ProtectedRoute requiredPermission="viewDashboard"><Skills /></ProtectedRoute>} />
      <Route path="/settings/*" element={<ProtectedRoute requiredPermission="viewDashboard"><Settings /></ProtectedRoute>} />
      <Route path="/compliance" element={<ProtectedRoute requiredPermission="viewDashboard"><Compliance /></ProtectedRoute>} />
      <Route path="/onboarding" element={<ProtectedRoute requiredPermission="viewDashboard"><Onboarding /></ProtectedRoute>} />
      
      {/* Catch all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
