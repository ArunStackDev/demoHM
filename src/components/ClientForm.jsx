import { useState, useEffect } from 'react'
{/**VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbzIeSmvHJimeuj5uEjU75uG9X7VRzHMy5EbBFGOihPsWzhKBbKTCmuE1J99NkPjnZJ5/exec
VITE_API_FORMS_URL=https://apiforms.com
VITE_FORM_ID=PmPOIFDHBofzrcbk6aYj
 */}
import clientformbackground from "../assets/ClientFormimg/clientformbackground.svg"
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
  const [shake, setShake] = useState(false)

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

  if (!schema) return (
    <p
      style={{ color: '#9ca3af', fontFamily: 'system-ui' }}
      className="mt-24 mx-auto w-fit text-center"
    >
      Loading…
    </p>
  )

  const d = schema.design || {}
  const totalSteps = schema.steps?.length || 1
  const stepFields = schema.fields.filter(f => (f.step || 1) === currentStep)
  const primaryColor = d.primaryColor || '#2563eb'
  const btnRadius = (d.buttonBorderRadius != null ? d.buttonBorderRadius : d.borderRadius || 6) + 'px'

  const inputSx = {
    width: '100%', boxSizing: 'border-box', padding: '8px 12px',
    background: '#fff',
    border: '1.5px solid #111827',
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
    const ph = lbl
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

      const nameFields = new Set(['first_name', 'last_name', 'name', 'firstname', 'lastname', 'firstName', 'lastName'])
      const isNameField = nameFields.has(f.name)
      const isMobileField = ['mobile', 'mobile_no', 'phone', 'phone_no', 'phonenumber'].includes(f.name)
      const isEmailField = f.type === 'email' || ['email', 'email_id'].includes(f.name)

      if (isNameField) {
        const val = String(v).trim()
        const onlyLetters = /^[A-Za-z\s]+$/.test(val)
        if (val.length < 3) { newErrors[f.name] = 'Minimum 3 letters required'; return }
        if (!onlyLetters) { newErrors[f.name] = 'Only letters allowed'; return }
        return
      }

      if (isMobileField) {
        const digits = String(v).replace(/\D/g, '')
        if (digits.length !== 10) { newErrors[f.name] = 'Mobile number must be exactly 10 digits'; return }
        return
      }

      if (isEmailField) {
        const email = String(v).trim()
        const emailRx = /^[A-Z0-9._%+-]{4,}@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        if (!emailRx.test(email)) newErrors[f.name] = 'Email must have at least 4 letters before @'
        return
      }
    })
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) {
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
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
    if (schema.captchaEnabled && !captchaToken) { setApiError('Please complete the CAPTCHA above'); setShake(true); setTimeout(() => setShake(false), 500); return }
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
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  if (status === 'success') return (
    <div
      style={{
        maxWidth: (d.maxWidth || 600) + 'px',
        margin: 'clamp(3rem, 10vh, 9rem) auto 0',
        padding: (d.paddingY || 48) + 'px ' + (d.paddingX || 16) + 'px',
        textAlign: 'center',
        fontFamily: d.fontFamily || 'system-ui',
        background: d.bgColor || 'transparent',
        borderRadius: (d.formBorderRadius || 0) + 'px',
      }}
      className="w-full px-4 sm:px-6"
    >
      <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '24px' }}>✓</div>
      <h3 style={{ fontSize: '18px', fontWeight: 600, color: d.textColor || '#374151', margin: '0 0 8px' }}>Submitted!</h3>
      <p style={{ fontSize: '14px', color: d.textColor || '#374151', opacity: 0.7, margin: 0 }}>{d.successMessage || 'Thank you! Your response has been submitted.'}</p>
    </div>
  )

  const stepInfo = totalSteps > 1 ? schema.steps?.find(s => s.stepNumber === currentStep) : null
console.log("Final URL:", API_URL + "/api/forms/" + FORM_ID + "/schema");
  const isFirstName = (f) => ['first_name', 'firstname', 'firstName'].includes(f?.name)
  const isLastName = (f) => ['last_name', 'lastname', 'lastName'].includes(f?.name)
  const firstNameField = stepFields.find(isFirstName)
  const lastNameField = stepFields.find(isLastName)

  function renderFieldsWithNameRow() {
    const out = []
    const hasNameRow = firstNameField && lastNameField
    stepFields.forEach(f => {
      if (hasNameRow && isFirstName(f)) {
        out.push(
          <div key="name-row" className="flex flex-col gap-3 lg:flex-row">
            <div className="flex-1 min-w-0">{renderField(firstNameField)}</div>
            <div className="flex-1 min-w-0">{renderField(lastNameField)}</div>
          </div>
        )
        return
      }
      if (hasNameRow && isLastName(f)) return
      out.push(renderField(f))
    })
    return out
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      style={{
        backgroundImage: `url(${clientformbackground})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className={`w-full max-w-[380px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px]
  lg:min-h-[85vh] p-6
  mt-10 mx-auto lg:mx-0 lg:ml-20
  flex flex-col gap-3 rounded-2xl shadow shadow-2xl shadow-gray-600 
  bg-white/70 backdrop-blur-md border border-white/40
  max-lg:mt-4 max-sm:p-4 ${shake ? 'animate-shake' : ''}`}>
      <style>{`
        @keyframes form-shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: form-shake 0.4s ease-in-out;
        }
        input[type=number]::-webkit-outer-spin-button,
        input[type=number]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
          appearance: textfield;
        }
      `}</style>
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
      {renderFieldsWithNameRow()}
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
