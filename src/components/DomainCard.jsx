import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, CheckCircle, XCircle, Clock, Trash2, Settings, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DomainDetailsModal from '@/components/DomainDetailsModal';

const PROVIDER_COLORS = {
  cloudflare: 'from-orange-500 to-orange-600',
  namecheap: 'from-orange-600 to-red-600',
  godaddy: 'from-green-600 to-green-700',
  google: 'from-blue-500 to-blue-600',
  other: 'from-gray-500 to-gray-600'
};

const DomainCard = ({ domain, index, userPlan, onDelete, onVerify, onSetup }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const records = domain.records || {};

  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'failed':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'configured':
        return <CheckCircle className="w-4 h-4 text-blue-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status) => {
    const variants = {
      verified: 'bg-green-100 text-green-700 border-green-200',
      failed: 'bg-red-100 text-red-700 border-red-200',
      configured: 'bg-blue-100 text-blue-700 border-blue-200',
      pending: 'bg-gray-100 text-gray-700 border-gray-200'
    };
    
    return variants[status] || variants.pending;
  };

  const recordTypes = ['spf', 'dkim', 'dmarc', 'cname'];
  const verifiedCount = recordTypes.filter(type => records[type]?.status === 'verified' || records[type]?.status === 'configured').length;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
      >
        <div className={`h-2 bg-gradient-to-r ${PROVIDER_COLORS[domain.provider] || PROVIDER_COLORS.other}`}></div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{domain.domain}</h3>
                <p className="text-sm text-gray-500 capitalize">{domain.provider}</p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(domain.id)}
              className="text-gray-400 hover:text-red-600"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">DNS Records</span>
              <span className="text-sm text-gray-500">{verifiedCount}/{recordTypes.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-blue-700 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(verifiedCount / recordTypes.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {recordTypes.map(type => (
              <div key={type} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                {getStatusIcon(records[type]?.status)}
                <span className="text-xs font-medium text-gray-700 uppercase">{type}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => onSetup(domain.id)}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              size="sm"
            >
              <Settings className="w-4 h-4 mr-2" />
              Setup
            </Button>
            <Button
              onClick={() => onVerify(domain.id)}
              variant="outline"
              className="flex-1"
              size="sm"
            >
              Verify
            </Button>
            <Button
              onClick={() => setShowDetails(true)}
              variant="outline"
              size="sm"
            >
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      {showDetails && (
        <DomainDetailsModal
          domain={domain}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
};

export default DomainCard;