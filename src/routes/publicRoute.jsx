import React, { lazy } from "react";
const HomePage = lazy(() => import("../features/public/pages/home/HomePage"));
const AboutUsPage = lazy(() =>
  import("../features/public/pages/about-us/AboutUsPage")
);
const DotorDetailPage = lazy(() =>
  import("../features/public/pages/about-us/DotorDetailPage")
);
const IssuesPage = lazy(() =>
  import("../features/public/pages/issues/IssuesPage")
);
const IssuesDetailPage = lazy(() =>
  import("../features/public/pages/issues/IssuesDetailPage")
);
const TreatmentsPage = lazy(() =>
  import("../features/public/pages/treatments/TreatmentsPage")
);
const TreatmentDetailPage = lazy(() =>
  import("../features/public/pages/treatments/TreatmentDetailPage")
);
const BlogPage = lazy(() => import("../features/public/pages/blog/BlogPage"));
const BlogDetail = lazy(() =>
  import("../features/public/pages/blog/BlogDetail")
);
const ContactUsPage = lazy(() =>
  import("../features/public/pages/contact-us/ContactUsPage")
);
const BookAppointmentPage = lazy(() =>
  import("../features/public/pages/booking-appointment/BookAppointmentPage")
);
const PrivacyPolicyPage = lazy(() =>
  import("../features/public/pages/privacy-policy/PrivacyPolicyPage")
);
const TermsAndConditionsPage = lazy(() =>
  import("../features/public/pages/terms-and-conditions/TermsAndConditionsPage")
);

const publicRoute = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
  {
    path: "doctors/:slug",
    element: <DotorDetailPage />,
  },
  {
    path: "/issues",
    element: <IssuesPage />,
  },
  {
    path: "/issues/:slug",
    element: <IssuesDetailPage />,
  },
  {
    path: "/treatments",
    element: <TreatmentsPage />,
  },
  {
    path: "/treatments/:slug",
    element: <TreatmentDetailPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/:slug",
    element: <BlogDetail />,
  },
  {
    path: "/contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "/book-appointment",
    element: <BookAppointmentPage />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicyPage />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditionsPage />,
  },
];
export default publicRoute;
