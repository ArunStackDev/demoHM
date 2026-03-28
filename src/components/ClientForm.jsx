import { useState, useEffect } from 'react'
{/**VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbzIeSmvHJimeuj5uEjU75uG9X7VRzHMy5EbBFGOihPsWzhKBbKTCmuE1J99NkPjnZJ5/exec
VITE_API_FORMS_URL=https://apiforms.com
VITE_FORM_ID=PmPOIFDHBofzrcbk6aYj
 */}

const FORM_ID = "PmPOIFDHBofzrcbk6aYj"
const API_URL = "https://apiforms.com"

export default function ContactUsForm() {
  const [schema, setSchema] = useState(null)
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [apiError, setApiError] = useState('')
  const [captchaToken, setCaptchaToken] = useState(null)
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    fetch(API_URL + '/api/forms/' + FORM_ID + '/schema')
      .then(r => r.json())
      .then(s => {
        setSchema(s)
        const init = {}
        s.fields.forEach(f => {
          init[f.name] = f.type === 'boolean' ? false : f.type === 'checkbox-group' ? [] : f.type === 'file' ? null : ''
        })
        setValues(init)
      })
  }, [])

  useEffect(() => {
    function onMsg(e) {
      if (e.origin === API_URL && e.data && e.data.type === 'apiforms-captcha')
        setCaptchaToken(e.data.token || null)
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [])

  if (!schema) return <p style={{ color: '#9ca3af', fontFamily: 'system-ui', margin:'200px 0px 0px 300px'}} >Loading…</p>

  const d = schema.design || {}
  const totalSteps = schema.steps?.length || 1
  const stepFields = schema.fields.filter(f => (f.step || 1) === currentStep)
  const primaryColor = d.primaryColor || '#2563eb'
  const btnRadius = (d.buttonBorderRadius != null ? d.buttonBorderRadius : d.borderRadius || 6) + 'px'

  const inputSx = {
    width: '100%', boxSizing: 'border-box', padding: '8px 12px',
    background: d.inputBg || '#fff',
    border: '1px solid ' + (d.borderColor || '#d1d5db'),
    borderRadius: (d.borderRadius || 6) + 'px',
    fontSize: (d.inputFontSize || 14) + 'px',
    color: d.textColor || '#374151',
    fontFamily: d.fontFamily || 'system-ui',
    outline: 'none',
  }
  const labelSx = {
    display: 'block',
    fontSize: (d.labelFontSize || 14) + 'px',
    fontWeight: 500,
    color: d.textColor || '#374151',
    marginBottom: '4px',
    fontFamily: d.fontFamily || 'system-ui',
  }
  const rowSx = { display: 'flex', alignItems: 'center', gap: '8px', fontSize: (d.inputFontSize || 14) + 'px', color: d.textColor || '#374151', fontFamily: d.fontFamily || 'system-ui' }
  const isPlaceholder = d.labelPosition === 'placeholder'

  function onChange(e) {
    const { name, type, value, checked } = e.target
    setValues(p => ({ ...p, [name]: type === 'checkbox' ? checked : value }))
  }
  function onCheckboxGroup(e) {
    const { name, value, checked } = e.target
    setValues(p => ({ ...p, [name]: checked ? [...(p[name] || []), value] : (p[name] || []).filter(v => v !== value) }))
  }

  function renderField(f) {
    const lbl = f.label || f.name
    const ph = isPlaceholder ? lbl : ''
    const err = errors[f.name]
    const label = !isPlaceholder && <label style={labelSx}>{lbl}{f.required && <span style={{ color: '#ef4444' }}> *</span>}</label>
    const errEl = err && <p style={{ color: '#ef4444', fontSize: '12px', margin: '2px 0 0' }}>{err}</p>
    const wrap = (children) => <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>{children}{errEl}</div>

    if (f.type === 'textarea')
      return wrap(<>{label}<textarea name={f.name} rows={4} placeholder={ph} value={values[f.name] || ''} onChange={onChange} style={{ ...inputSx, resize: 'vertical' }} /></>)
    if (f.type === 'select')
      return wrap(<>{label}<select name={f.name} value={values[f.name] || ''} onChange={onChange} style={inputSx}><option value="">-- Select --</option>{(f.options || []).map(o => <option key={o} value={o}>{o}</option>)}</select></>)
    if (f.type === 'radio')
      return wrap(<>{label}{(f.options || []).map(o => <label key={o} style={rowSx}><input type="radio" name={f.name} value={o} checked={values[f.name] === o} onChange={onChange} /> {o}</label>)}</>)
    if (f.type === 'checkbox-group')
      return wrap(<>{label}{(f.options || []).map(o => <label key={o} style={rowSx}><input type="checkbox" name={f.name} value={o} checked={(values[f.name] || []).includes(o)} onChange={onCheckboxGroup} /> {o}</label>)}</>)
    if (f.type === 'boolean')
      return wrap(<label style={rowSx}><input type="checkbox" name={f.name} checked={!!values[f.name]} onChange={onChange} />{lbl}{f.required && <span style={{ color: '#ef4444' }}> *</span>}</label>)
    if (f.type === 'file')
      return wrap(<>{label}<label htmlFor={f.name} style={{...inputSx,display:'flex',alignItems:'center',gap:'10px',cursor:'pointer'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg><span style={{flex:1,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',opacity:values[f.name]?1:0.6}}>{values[f.name]?values[f.name].name:'Choose file…'}</span>{f.accept&&<span style={{fontSize:'11px',opacity:0.4,whiteSpace:'nowrap'}}>{f.accept}</span>}</label><input type="file" id={f.name} name={f.name} accept={f.accept||undefined} style={{position:'absolute',width:'1px',height:'1px',opacity:0,pointerEvents:'none'}} onChange={e=>setValues(p=>({...p,[f.name]:e.target.files[0]||null}))} /></>)

    const t = ['email','url','tel','number','date','time','color','range'].includes(f.type) ? f.type : 'text'
    return wrap(<>{label}<input type={t} name={f.name} value={values[f.name] || ''} placeholder={ph} onChange={onChange} style={inputSx} /></>)
  }

  function validateStep() {
    const newErrors = {}
    stepFields.forEach(f => {
      const v = values[f.name]
      const empty =
        v === undefined ||
        v === null ||
        (typeof v === 'string' && !v.trim()) ||
        (Array.isArray(v) && !v.length) ||
        (f.type === 'boolean' && !v) ||
        (f.type === 'file' && !v)

      if (f.required && empty) {
        newErrors[f.name] = (f.label || f.name) + ' is required'
        return
      }

      if (empty) return

      // Type-specific strict validation
      if (f.type === 'email') {
        const email = String(v).trim()
        const emailRx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        if (!emailRx.test(email)) newErrors[f.name] = 'Enter a valid email address'
        return
      }

      if (f.type === 'url') {
        try {
          const u = new URL(String(v))
          if (u.protocol !== 'http:' && u.protocol !== 'https:') throw new Error('bad')
        } catch {
          newErrors[f.name] = 'Enter a valid URL'
        }
        return
      }

      if (f.type === 'tel') {
        const digits = String(v).replace(/\D/g, '')
        if (digits.length < 10 || digits.length > 15) newErrors[f.name] = 'Enter a valid phone number'
        return
      }

      if (f.type === 'number' || f.type === 'range') {
        const num = Number(v)
        if (!Number.isFinite(num)) { newErrors[f.name] = 'Enter a valid number'; return }
        if (f.min != null && num < Number(f.min)) { newErrors[f.name] = `Minimum allowed is ${f.min}`; return }
        if (f.max != null && num > Number(f.max)) { newErrors[f.name] = `Maximum allowed is ${f.max}`; return }
        return
      }

      if (f.type === 'date') {
        const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(String(v)) && !Number.isNaN(Date.parse(String(v)))
        if (!isValidDate) newErrors[f.name] = 'Enter a valid date'
        return
      }

      if (f.type === 'time') {
        const isValidTime = /^([01]\d|2[0-3]):[0-5]\d$/.test(String(v))
        if (!isValidTime) newErrors[f.name] = 'Enter a valid time'
        return
      }

      if (f.type === 'checkbox-group') {
        if (!Array.isArray(v) || v.length === 0) newErrors[f.name] = 'Select at least one option'
        return
      }

      if (f.type === 'file') {
        if (v.size > 5 * 1024 * 1024) { newErrors[f.name] = 'File must be under 5MB'; return }
        if (f.accept && v.type) {
          const accepted = String(f.accept)
            .split(',')
            .map(s => s.trim().toLowerCase())
            .filter(Boolean)
          const fileType = v.type.toLowerCase()
          const fileExt = (v.name || '').toLowerCase().split('.').pop()
          const ok = accepted.some(a => {
            if (a.startsWith('.')) return fileExt && ('.' + fileExt) === a
            if (a.endsWith('/*')) return fileType.startsWith(a.replace('/*', ''))
            return fileType === a
          })
          if (!ok) newErrors[f.name] = 'Unsupported file type'
        }
        return
      }

      // Default text validation
      if (typeof v === 'string') {
        const val = v.trim()
        if (f.minLength != null && val.length < Number(f.minLength)) { newErrors[f.name] = `Minimum ${f.minLength} characters`; return }
        if (f.maxLength != null && val.length > Number(f.maxLength)) { newErrors[f.name] = `Maximum ${f.maxLength} characters`; return }
        if (f.pattern) {
          try {
            const rx = new RegExp(f.pattern)
            if (!rx.test(val)) newErrors[f.name] = 'Invalid format'
          } catch {
            // ignore invalid pattern from schema
          }
        }
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
const handleFormSubmit = (body) => {

const today = new Date().toLocaleDateString("en-IN");

const url = "https://script.google.com/macros/s/AKfycbzIeSmvHJimeuj5uEjU75uG9X7VRzHMy5EbBFGOihPsWzhKBbKTCmuE1J99NkPjnZJ5/exec"
const params = new URLSearchParams({
  data: JSON.stringify({
    date: today,
    firstname: body.formData.first_name,
    lastname: body.formData.last_name,
    email: body.formData.email,
    phonenumber: body.formData.mobile_no,
    age: body.formData.age_of_the_senoir,
    whoisthisservicefor: body.formData.who_is_this_service_for,
    interestedIn: body.formData.i_am_interested_in
  })
});



fetch(url, {
  method: "POST",
  body: params
})
.then(res => res.text())
.then(data => {
  console.log("Successfully submitted", data);
})
.catch(error => console.log("Error from script ::", error));

};
  async function onSubmit(e) {
    e.preventDefault()
    if (!validateStep()) return
    if (schema.captchaEnabled && !captchaToken) { setApiError('Please complete the CAPTCHA above'); return }
    setStatus('submitting')
    setApiError('')
    try {
      const hasFiles = schema.fields.some(f => f.type === 'file')
      let res
      if (hasFiles) {
        const fd = new FormData()
        fd.append('formId', FORM_ID)
        const nonFileData = {}
        schema.fields.forEach(f => { if (f.type !== 'file') nonFileData[f.name] = values[f.name] })
        fd.append('formData', JSON.stringify(nonFileData))
        if (schema.captchaEnabled) fd.append('captchaToken', captchaToken)
        schema.fields.forEach(f => { if (f.type === 'file' && values[f.name]) fd.append('file_' + f.name, values[f.name]) })
        res = await fetch(API_URL + '/api/forms/submit', { method: 'POST', body: fd })
      } else {
        const body = { formId: FORM_ID, formData: values }
        handleFormSubmit(body)
        if (schema.captchaEnabled) body.captchaToken = captchaToken
        res = await fetch(API_URL + '/api/forms/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      }
      const data = await res.json()
      if (!res.ok) throw new Error(Array.isArray(data.error) ? data.error.join(', ') : data.error)
      if (data.redirectUrl) { window.location.href = data.redirectUrl; return }
      setStatus('success')
    } catch (err) {
      setStatus('idle')
      setApiError(err.message || 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') return (
    <div style={{ maxWidth: (d.maxWidth || 600) + 'px', margin: '150px 50px 0px 100px', padding: (d.paddingY || 48) + 'px ' + (d.paddingX || 16) + 'px', textAlign: 'center', fontFamily: d.fontFamily || 'system-ui', background: d.bgColor || 'transparent', borderRadius: (d.formBorderRadius || 0) + 'px' }}>
      <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '24px' }}>✓</div>
      <h3 style={{ fontSize: '18px', fontWeight: 600, color: d.textColor || '#374151', margin: '0 0 8px' }}>Submitted!</h3>
      <p style={{ fontSize: '14px', color: d.textColor || '#374151', opacity: 0.7, margin: 0 }}>{d.successMessage || 'Thank you! Your response has been submitted.'}</p>
    </div>
  )

  const stepInfo = totalSteps > 1 ? schema.steps?.find(s => s.stepNumber === currentStep) : null
console.log("Final URL:", API_URL + "/api/forms/" + FORM_ID + "/schema");
  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="w-full max-w-[520px] md:max-w-[480px] lg:max-w-[520px] 
  max-h-[70vh] overflow-y-auto p-6 bg-white 
  mt-10 md:ml-10 lg:ml-16 xl:ml-20
  flex flex-col gap-3 rounded-2xl shadow shadow-2xl shadow-gray-600 
  max-lg:ml-0 max-lg:mt-4 max-lg:max-h-none max-sm:p-4">
      {totalSteps > 1 && (
        <div>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '12px' }}>
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map(n => (
              <div key={n} style={{ width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 600, background: n <= currentStep ? primaryColor : '#e0e0e0', color: n <= currentStep ? '#fff' : '#666', opacity: n < currentStep ? 0.5 : 1 }}>{n}</div>
            ))}
          </div>
          {stepInfo && <div style={{ fontWeight: 600, fontSize: '15px', marginBottom: '4px', color: d.textColor || '#374151' }}>{stepInfo.title}</div>}
        </div>
      )}
      {stepFields.map(renderField)}
      {currentStep === totalSteps && schema.captchaEnabled && <iframe src={API_URL + '/captcha?formId=' + FORM_ID} scrolling="no" style={{ border: 'none', width: '305px', height: '65px', overflow: 'hidden' }} />}
      {apiError && <p style={{ padding: '10px 14px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: (d.borderRadius || 6) + 'px', color: '#dc2626', fontSize: '14px', margin: 0 }}>{apiError}</p>}
      <div style={{ display: 'flex', gap: '8px' }}>
        {totalSteps > 1 && currentStep > 1 && (
          <button type="button" onClick={() => { setErrors({}); setCurrentStep(s => s - 1) }} style={{ padding: '10px 24px', background: 'transparent', color: primaryColor, border: '1px solid ' + primaryColor, borderRadius: btnRadius, fontSize: (d.buttonFontSize || 14) + 'px', fontWeight: 500, fontFamily: d.fontFamily || 'system-ui', cursor: 'pointer' }}>Previous</button>
        )}
        {currentStep < totalSteps ? (
          <button type="button" onClick={() => { if (validateStep()) { setErrors({}); setCurrentStep(s => s + 1) } }} style={{ flex: 1, padding: '10px 24px', background: primaryColor, color: d.buttonTextColor || '#fff', border: 'none', borderRadius: btnRadius, fontSize: (d.buttonFontSize || 14) + 'px', fontWeight: 500, fontFamily: d.fontFamily || 'system-ui', cursor: 'pointer' }}>Next</button>
        ) : (
          <button type="submit" disabled={status === 'submitting'} style={{ flex: 1, padding: '10px 24px', background: primaryColor, color: d.buttonTextColor || '#fff', border: 'none', borderRadius: btnRadius, fontSize: (d.buttonFontSize || 14) + 'px', fontWeight: 500, fontFamily: d.fontFamily || 'system-ui', cursor: status === 'submitting' ? 'not-allowed' : 'pointer', opacity: status === 'submitting' ? 0.6 : 1 }}className="mt-2">
            {status === 'submitting' ? 'Submitting…' : d.buttonText || 'Submit'}
          </button>
        )}
      </div>
    </form>
  )
}
