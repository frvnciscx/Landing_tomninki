import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { SystemFunctions } from './components/SystemFunctions';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { EarlyAccess } from './components/EarlyAccess';
import { FAQ } from './components/FAQ';
import { PreFooter } from './components/PreFooter';
import { Footer } from './components/Footer';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminPostList } from './pages/admin/AdminPostList';
import { AdminPostEditor } from './pages/admin/AdminPostEditor';

// ─── Public Layout ────────────────────────────────────────────────────────────

function PublicLayout() {
  const location = useLocation();
  const isBlogPost = location.pathname.startsWith('/blog/');
  const isBlog = location.pathname === '/blog';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#09090b] transition-colors duration-500 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main>
        {isBlogPost ? (
          <BlogPost />
        ) : isBlog ? (
          <Blog />
        ) : (
          <>
            <Hero />
            <Problem />
            <Solution />
            <SystemFunctions />
            <SocialProof />
            <PreFooter />
            <Pricing />
            <EarlyAccess />
            <FAQ />

          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Admin Routes — independent layout, no public navbar */}
          <Route
            path="/admin"
            element={
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/posts"
            element={
              <AdminLayout>
                <AdminPostList />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/posts/new"
            element={
              <AdminLayout>
                <AdminPostEditor />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/posts/:id/edit"
            element={
              <AdminLayout>
                <AdminPostEditor />
              </AdminLayout>
            }
          />

          {/* Public Routes */}
          <Route path="/*" element={<PublicLayout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
