import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence } from 'framer-motion'

// Context
import { AppProvider } from '@context/AppContext'
import { UniverseVideoProvider } from '@context/UniverseVideoContext'

// Layout shell
import { PageLayout } from '@components/layout/PageLayout'
import { PageWrapper } from '@components/layout/PageWrapper'
import { CustomCursor } from '@components/cursor/CustomCursor'
import { LoadingScreen } from '@components/overlays/LoadingScreen'
import ScrollToTop from '@components/ScrollToTop'

// Pages
const Home = lazy(() => import('@pages/Home'))
const Universe = lazy(() => import('@pages/Universe'))
const Works = lazy(() => import('@pages/Works'))
const Artwork = lazy(() => import('@pages/Artwork'))
const Projects = lazy(() => import('@pages/Projects'))
const ProjectDetail = lazy(() => import('@pages/ProjectDetail'))
const Merch = lazy(() => import('@pages/Merch'))
const Exhibition = lazy(() => import('@pages/Exhibition'))
const ExhibitionDetails = lazy(() => import('@pages/ExhibitionDetails'))
const Biography = lazy(() => import('@pages/Biography'))
const Collaborations = lazy(() => import('@pages/Collaborations'))
const Contact = lazy(() => import('@pages/Contact'))
const Tattoos = lazy(() => import('@pages/Tattoos'))
const TattooGallery = lazy(() => import('@pages/TattooGallery'))
const TattooDesigns = lazy(() => import('@pages/TattooDesigns'))
const NotFound = lazy(() => import('@pages/NotFound'))

function AppRoutes() {
  const location = useLocation()

  return (
    <PageLayout>
      <AnimatePresence mode="wait" initial={false}>
        <Suspense fallback={null}>
          <Routes location={location} key={location.pathname}>

            {/* Core pages */}
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />

            <Route
              path="/universe"
              element={
                <PageWrapper>
                  <Universe />
                </PageWrapper>
              }
            />

            <Route
              path="/works"
              element={
                <PageWrapper>
                  <Works />
                </PageWrapper>
              }
            />

            {/* Artwork routes */}
            <Route
              path="/artwork"
              element={
                <PageWrapper>
                  <Artwork />
                </PageWrapper>
              }
            />

            {/* Nueva arquitectura */}
            <Route
              path="/works/:category/:slug"
              element={
                <PageWrapper>
                  <Artwork />
                </PageWrapper>
              }
            />

            {/* Compatibilidad */}
            <Route
              path="/works/:slug"
              element={
                <PageWrapper>
                  <Artwork />
                </PageWrapper>
              }
            />

            <Route
              path="/projects"
              element={
                <PageWrapper>
                  <Projects />
                </PageWrapper>
              }
            />

            <Route
              path="/projects/:slug"
              element={
                <PageWrapper>
                  <ProjectDetail />
                </PageWrapper>
              }
            />

            {/* Merch */}
            <Route
              path="/merch"
              element={
                <PageWrapper>
                  <Merch />
                </PageWrapper>
              }
            />

            <Route
              path="/tattoos"
              element={
                <PageWrapper>
                  <Tattoos />
                </PageWrapper>
              }
            />

            <Route
              path="/tattoos/gallery"
              element={
                <PageWrapper>
                  <TattooGallery />
                </PageWrapper>
              }
            />

            <Route
              path="/tattoos/designs"
              element={
                <PageWrapper>
                  <TattooDesigns />
                </PageWrapper>
              }
            />

            {/* Exhibition */}
            <Route
              path="/exhibition"
              element={
                <PageWrapper>
                  <Exhibition />
                </PageWrapper>
              }
            />

            <Route
              path="/exhibition/:slug"
              element={
                <PageWrapper>
                  <ExhibitionDetails />
                </PageWrapper>
              }
            />

            <Route
              path="/biography"
              element={
                <PageWrapper>
                  <Biography />
                </PageWrapper>
              }
            />

            <Route
              path="/collaborations"
              element={
                <PageWrapper>
                  <Collaborations />
                </PageWrapper>
              }
            />

            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />

            <Route
              path="*"
              element={
                <PageWrapper>
                  <NotFound />
                </PageWrapper>
              }
            />

          </Routes>
        </Suspense>
      </AnimatePresence>
    </PageLayout>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <UniverseVideoProvider>
          <CustomCursor />
          <LoadingScreen />
          <ScrollToTop />
          <AppRoutes />
        </UniverseVideoProvider>
      </AppProvider>
    </HelmetProvider>
  )
}