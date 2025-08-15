import React, { Suspense, useEffect } from "react";
import "./App.css";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import AppLayout from "./layout/AppLayout";

// Lazy-loaded pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const UnsubscribePage = React.lazy(() => import("./pages/UnsubscribePage"));
const ConfirmToken = React.lazy(() => import("./pages/ConfirmToken"));
const NewsletterConfirm = React.lazy(() => import("./pages/NewsletterConfirm"));
const PrivacyPolicy = React.lazy(() => import("./pages/PriPolicy"));
const RefundPolicy = React.lazy(() => import("./pages/RefundPolicy"));
const TermsOfService = React.lazy(() => import("./pages/TermsOfService"));
const BlogsPage = React.lazy(() => import("./pages/BlogsPage"));
const BlogDetails = React.lazy(() => import("./pages/BlogDetails"));
const Solutions = React.lazy(() => import("./pages/Solutions"));
const Industries = React.lazy(() => import("./pages/Industries"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/blogs",
          children: [
            { index: true, element: <BlogsPage /> },
            { path: ":slug", element: <BlogDetails /> },
            { path: "*", element: <Navigate to="/404" replace /> },
          ],
        },
        { path: "/unsubscribe", element: <UnsubscribePage /> },
        { path: "/newsletter/confirm", element: <ConfirmToken /> },
        {
          path: "/newsletter/confirm-newsletter",
          element: <NewsletterConfirm />,
        },
        {
          path: "/solutions",
          children: [
            { index: true, element: <NotFoundPage /> },
            { path: ":solutionId", element: <Solutions /> },
            { path: "*", element: <Navigate to="/404" replace /> },
          ],
        },
        {
          path: "/industries",
          children: [
            { index: true, element: <NotFoundPage /> },
            { path: ":industryId", element: <Industries /> },
            { path: "*", element: <Navigate to="/404" replace /> },
          ],
        },
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
        { path: "/refund-policy", element: <RefundPolicy /> },
        { path: "/terms-of-service", element: <TermsOfService /> },
        { path: "/404", element: <NotFoundPage /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
  ]);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
