
<div className="form-group">
  <label htmlFor="stream">Stream:</label>
  <select
    id="stream"
    value={stream}
    onChange={(e) => setStream(e.target.value)}
  >
    <option value="">Select Stream</option>
    <option value="Computer Science and Engineering">Computer Science and Engineering</option>
    <option value="Information Technology">Information Technology</option>
    <option value="AI&ML">AI&ML</option>

  </select>
</div>