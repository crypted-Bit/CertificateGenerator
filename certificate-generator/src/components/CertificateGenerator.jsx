import React, { useRef, useState } from 'react';
import { Canvg } from 'canvg';

const CertificateGenerator = () => {
  const certificateRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    completionDate: '',
    issuer: '',
    signature: '',
    issueDate: '',
    certificateType: '',
  });
  const [showCertificate, setShowCertificate] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateCertificate = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.completionDate ||
      !formData.issuer ||
      !formData.signature ||
      !formData.issueDate ||
      !formData.certificateType
    ) {
      alert('Please fill out all fields.');
      return;
    }
    setShowCertificate(true);
  };

  const handleDownloadCertificate = () => {
    const certificateSVG = certificateRef.current;

    if (!certificateSVG) {
      alert('Certificate element not found.');
      return;
    }

    // Convert SVG to canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = certificateSVG.clientWidth;
    canvas.height = certificateSVG.clientHeight;

    // Render SVG onto canvas using canvg
    const svgString = new XMLSerializer().serializeToString(certificateSVG);
    Canvg.from(ctx, svgString).then((v) => {
      v.start();

      // Convert canvas to image URL
      const imageURL = canvas.toDataURL('image/png');

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = imageURL;
      link.download = 'certificate.png'; // Set the file name
      document.body.appendChild(link);
      link.click(); // Trigger the download
      document.body.removeChild(link); // Clean up
    });
  };

  const getCertificateDesign = () => {
    switch (formData.certificateType) {
      case 'Course Completion':
        return {
          title: 'Certificate of Course Completion',
          backgroundColor: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
          borderColor: '#3B82F6',
          textColor: '#1E40AF',
          icon: '📚',
          pattern: (
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="5" fill="#3B82F6" opacity="0.2" />
            </pattern>
          ),
          decoration: (
            <g>
              <rect x="0" y="0" width="800" height="600" fill="url(#pattern)" />
              <text x="400" y="100" fontSize="40" fontWeight="bold" fill="#1E40AF" textAnchor="middle">
                🎓 Certificate of Course Completion 🎓
              </text>
            </g>
          ),
        };
      case 'Participation':
        return {
          title: 'Certificate of Participation',
          backgroundColor: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)',
          borderColor: '#10B981',
          textColor: '#065F46',
          icon: '🎉',
          pattern: (
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="20" height="20" fill="#10B981" opacity="0.2" />
            </pattern>
          ),
          decoration: (
            <g>
              <rect x="0" y="0" width="800" height="600" fill="url(#pattern)" />
              <text x="400" y="100" fontSize="40" fontWeight="bold" fill="#065F46" textAnchor="middle">
                🎉 Certificate of Participation 🎉
              </text>
            </g>
          ),
        };
      case 'Excellence':
        return {
          title: 'Certificate of Excellence',
          backgroundColor: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
          borderColor: '#F59E0B',
          textColor: '#92400E',
          icon: '🏆',
          pattern: (
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <polygon points="20,0 40,40 0,40" fill="#F59E0B" opacity="0.2" />
            </pattern>
          ),
          decoration: (
            <g>
              <rect x="0" y="0" width="800" height="600" fill="url(#pattern)" />
              <text x="400" y="100" fontSize="40" fontWeight="bold" fill="#92400E" textAnchor="middle">
                🏆 Certificate of Excellence 🏆
              </text>
            </g>
          ),
        };
      case 'Leadership':
        return {
          title: 'Certificate of Leadership',
          backgroundColor: 'linear-gradient(135deg, #EDE9FE, #DDD6FE)',
          borderColor: '#8B5CF6',
          textColor: '#5B21B6',
          icon: '🌟',
          pattern: (
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="10" fill="#8B5CF6" opacity="0.2" />
            </pattern>
          ),
          decoration: (
            <g>
              <rect x="0" y="0" width="800" height="600" fill="url(#pattern)" />
              <text x="400" y="100" fontSize="40" fontWeight="bold" fill="#5B21B6" textAnchor="middle">
                🌟 Certificate of Leadership 🌟
              </text>
            </g>
          ),
        };
      case 'Innovation':
        return {
          title: 'Certificate of Innovation',
          backgroundColor: 'linear-gradient(135deg, #FCE7F3, #FBCFE8)',
          borderColor: '#EC4899',
          textColor: '#9D174D',
          icon: '💡',
          pattern: (
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="40" height="40" fill="#EC4899" opacity="0.2" />
            </pattern>
          ),
          decoration: (
            <g>
              <rect x="0" y="0" width="800" height="600" fill="url(#pattern)" />
              <text x="400" y="100" fontSize="40" fontWeight="bold" fill="#9D174D" textAnchor="middle">
                💡 Certificate of Innovation 💡
              </text>
            </g>
          ),
        };
      case 'Teamwork':
        return {
          title: 'Certificate of Teamwork',
          backgroundColor: 'linear-gradient(135deg, #E0E7FF, #C7D2FE)',
          borderColor: '#4F46E5',
          textColor: '#3730A3',
          icon: '🤝',
          pattern: (
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="10" fill="#4F46E5" opacity="0.2" />
            </pattern>
          ),
          decoration: (
            <g>
              <rect x="0" y="0" width="800" height="600" fill="url(#pattern)" />
              <text x="400" y="100" fontSize="40" fontWeight="bold" fill="#3730A3" textAnchor="middle">
                🤝 Certificate of Teamwork 🤝
              </text>
            </g>
          ),
        };
      default:
        return {
          title: 'Certificate of Achievement',
          backgroundColor: 'linear-gradient(135deg, #F3F4F6, #E5E7EB)',
          borderColor: '#6B7280',
          textColor: '#1F2937',
          icon: '🎖️',
          pattern: (
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="40" height="40" fill="#6B7280" opacity="0.2" />
            </pattern>
          ),
          decoration: (
            <g>
              <rect x="0" y="0" width="800" height="600" fill="url(#pattern)" />
              <text x="400" y="100" fontSize="40" fontWeight="bold" fill="#1F2937" textAnchor="middle">
                🎖️ Certificate of Achievement 🎖️
              </text>
            </g>
          ),
        };
    }
  };

  const { title, backgroundColor, borderColor, textColor, icon, pattern, decoration } =
    getCertificateDesign();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Form for User Input */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Certificate Details</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Completion Date</label>
            <input
              type="date"
              name="completionDate"
              value={formData.completionDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Issuer</label>
            <input
              type="text"
              name="issuer"
              value={formData.issuer}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Signature</label>
            <input
              type="text"
              name="signature"
              value={formData.signature}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Issue Date</label>
            <input
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Certificate Type</label>
            <select
              name="certificateType"
              value={formData.certificateType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            >
              <option value="">Select Type</option>
              <option value="Course Completion">Course Completion</option>
              <option value="Participation">Participation</option>
              <option value="Excellence">Excellence</option>
              <option value="Leadership">Leadership</option>
              <option value="Innovation">Innovation</option>
              <option value="Teamwork">Teamwork</option>
              <option value="Creativity">Creativity</option>
              <option value="Mentorship">Mentorship</option>
              <option value="Volunteerism">Volunteerism</option>
              <option value="Outstanding Performance">Outstanding Performance</option>
            </select>
          </div>
          <button
            type="button"
            onClick={handleGenerateCertificate}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Generate Certificate
          </button>
        </form>
      </div>

      {/* Certificate Design */}
      {showCertificate && (
        <svg
          ref={certificateRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          style={{
            background: backgroundColor,
            border: `8px solid ${borderColor}`,
            borderRadius: '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '800px',
          }}
        >
          {/* Background Pattern */}
          {pattern}

          {/* Decorative Elements */}
          {decoration}

          {/* Name */}
          <text
            x="400"
            y="200"
            fontSize="32"
            fontWeight="semibold"
            fill={textColor}
            textAnchor="middle"
          >
            {formData.name}
          </text>

          {/* Issuer */}
          <text
            x="400"
            y="300"
            fontSize="24"
            fill={textColor}
            textAnchor="middle"
          >
            Issued by: {formData.issuer}
          </text>

          {/* Completion Date */}
          <text
            x="400"
            y="350"
            fontSize="24"
            fill={textColor}
            textAnchor="middle"
          >
            Completion Date: {formData.completionDate}
          </text>

          {/* Signature */}
          <text
            x="200"
            y="450"
            fontSize="20"
            fill={textColor}
            textAnchor="middle"
          >
            Signature: {formData.signature}
          </text>

          {/* Issue Date */}
          <text
            x="600"
            y="450"
            fontSize="20"
            fill={textColor}
            textAnchor="middle"
          >
            Issue Date: {formData.issueDate}
          </text>

          {/* Icon */}
          <text
            x="750"
            y="50"
            fontSize="48"
            fill={textColor}
            textAnchor="end"
          >
            {icon}
          </text>
        </svg>
      )}

      {/* Download Button */}
      {showCertificate && (
        <button
          onClick={handleDownloadCertificate}
          className="mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
        >
          Download Certificate
        </button>
      )}
    </div>
  );
};

export default CertificateGenerator;