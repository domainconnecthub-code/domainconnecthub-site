import React from 'react';
import { motion } from 'framer-motion';
import { X, Copy, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const DomainDetailsModal = ({ domain, onClose }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied! 📋",
      description: "Record value copied to clipboard"
    });
  };

  const getStatusInfo = (status) => {
    switch (status) {
      case 'verified':
        return { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', label: 'Verified' };
      case 'configured':
        return { icon: CheckCircle, color: 'text-blue-600', bg: 'bg-blue-50', label: 'Configured' };
      case 'failed':
        return { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50', label: 'Failed' };
      default:
        return { icon: Clock, color: 'text-gray-600', bg: 'bg-gray-50', label: 'Pending' };
    }
  };

  const records = [
    { type: 'A', name: 'A Record', description: 'Points domain to IP address' },
    { type: 'CNAME', name: 'CNAME Record', description: 'Alias for another domain' },
    { type: 'TXT', name: 'TXT Record', description: 'Text verification record' },
    { type: 'MX', name: 'MX Record', description: 'Mail server configuration' },
    { type: 'SPF', name: 'SPF Record', description: 'Email sender authentication' },
    { type: 'DKIM', name: 'DKIM Record', description: 'Email signature verification' },
    { type: 'DMARC', name: 'DMARC Record', description: 'Email authentication policy' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1">{domain.domain}</h2>
              <p className="text-blue-100 capitalize">Provider: {domain.provider}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">DNS Records</h3>
          
          <div className="space-y-4">
            {records.map(record => {
              const recordData = domain.records[record.type.toLowerCase()];
              const statusInfo = getStatusInfo(recordData?.status);
              const StatusIcon = statusInfo.icon;

              return (
                <div key={record.type} className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-semibold text-gray-900">{record.name}</h4>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${statusInfo.bg}`}>
                          <StatusIcon className={`w-3 h-3 ${statusInfo.color}`} />
                          <span className={`text-xs font-medium ${statusInfo.color}`}>
                            {statusInfo.label}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{record.description}</p>
                    </div>
                  </div>

                  {recordData?.value && (
                    <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                      <code className="text-xs text-gray-700 font-mono break-all flex-1">
                        {recordData.value}
                      </code>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(recordData.value)}
                        className="ml-2 flex-shrink-0"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          >
            Close
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default DomainDetailsModal;