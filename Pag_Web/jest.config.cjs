module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  
  // ----------------------------------------------------------------------
  // MODIFICACIÓN CLAVE: Mapeo de módulos más robusto para archivos estáticos
  // ----------------------------------------------------------------------
  moduleNameMapper: {
    // Mantiene el mockeo de estilos (requiere el paquete 'identity-obj-proxy')
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    
    // Nueva RegEx: Asegura que mapea CUALQUIER importación que termine 
    // en una extensión de imagen, resolviendo el error del 'Navbar'.
    '^.+\\.(jpg|jpeg|png|gif|svg|webp|avif)$': '<rootDir>/__mocks__/fileMock.js'
  },
  // ----------------------------------------------------------------------
  
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  transformIgnorePatterns: [
    // La configuración para react-router-dom es correcta si es una dependencia reciente
    'node_modules/(?!(react-router-dom)/)' 
  ]
};